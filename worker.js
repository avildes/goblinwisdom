// src/templates/unpopulated-worker/src/index.js
import { html } from "./renderHtml.js";

const SCRYFALL_API_URL = "https://api.scryfall.com/cards/random?q=type%3Agoblin%20has%3Aflavor&pretty=1";
const CLIENT_URL = "https://goblinwisdom.com"

// Reference: https://developers.cloudflare.com/workers/examples/cors-header-proxy
const corsHeaders = {
    "Access-Control-Allow-Origin": CLIENT_URL,
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS",
    "Access-Control-Max-Age": "86400",
}

function handleOptions (request) {
    // Make sure the necessary headers are present
    // for this to be a valid pre-flight request
    let headers = request.headers
    if (
            headers.get("Origin") !== null &&
            headers.get("Access-Control-Request-Method") !== null &&
            headers.get("Access-Control-Request-Headers") !== null
    ) { 
            // Handle CORS pre-flight request.
            // If you want to check or reject the requested method + headers
            // you can do that here.
            let respHeaders = {
                    ...corsHeaders,
                    // Allow all future content Request headers to go back to browser
                    // such as Authorization (Bearer) or X-Client-Name-Version
                    "Access-Control-Allow-Headers": request.headers.get("Access-Control-Request-Headers"),
            }
            return new Response(null, {
                    headers: respHeaders,
            })
    }
    else {
            // Handle standard OPTIONS request.
            // If you want to allow other HTTP Methods, you can do that here.
            return new Response(null, {
                    headers: {
                            Allow: "GET, HEAD, POST, OPTIONS",
                    },
            })
    }
}

async function fetchImage(url) {
    return url;
    /*const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const base64String = base64ArrayBuffer(arrayBuffer); //btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
    return `data:image/png;base64,${base64String}`;*/
}

async function getDailyImage(env) {
    const db = env.DATABASE;

    // Clear existing data
    await db.prepare("DELETE FROM cards").run();

    // Fetch new data from Scryfall API with required headers
    const response = await fetch(SCRYFALL_API_URL, {
        headers: {
            'User-Agent': 'GoblinWisdom/1.0 (avildes@gmail.com)',
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch data from Scryfall API: ${response.statusText}`);
    }

    const data = await response.json();

    // Download images
    const image = await fetchImage(data.image_uris.png);
    const background = await fetchImage(data.image_uris.art_crop);
    //console.log(data);
    //console.log(image);
    //console.log(background);
    // Insert new data into the database
    await db.prepare("INSERT INTO cards (flavor, image, background) VALUES (?, ?, ?)")
        .bind(data.flavor_text, image, background)
        .run();
}

async function handleRequest(request, env) {
    const db = env.DATABASE;

    // Fetch data from the database
    const result = await db.prepare("SELECT flavor, image, background FROM cards LIMIT 1").first();

    if (result) {
        return new Response(JSON.stringify({
            flavor: result.flavor,
            image: result.image,//`https://goblinwisdom.avildes.workers.dev/image`,
            background: result.background//`https://goblinwisdom.avildes.workers.dev/background`
        }), {
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
    } else {
        return new Response("No data found", { status: 404 });
    }
}

async function handleImageRequest(env, type) {
    const db = env.DATABASE;
    const result = await db.prepare(`SELECT ${type} FROM cards LIMIT 1`).first();

    if (result) {
        return new Response(result[type], {
            headers: { 'Content-Type': 'image/png', ...corsHeaders }
        });
    } else {
        return new Response("No image found", { status: 404 });
    }
}

function base64ArrayBuffer(arrayBuffer) {
    var base64    = ''
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  
    var bytes         = new Uint8Array(arrayBuffer)
    var byteLength    = bytes.byteLength
    var byteRemainder = byteLength % 3
    var mainLength    = byteLength - byteRemainder
  
    var a, b, c, d
    var chunk
  
    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
  
      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
      d = chunk & 63               // 63       = 2^6 - 1
  
      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
    }
  
    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      chunk = bytes[mainLength]
  
      a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2
  
      // Set the 4 least significant bits to zero
      b = (chunk & 3)   << 4 // 3   = 2^2 - 1
  
      base64 += encodings[a] + encodings[b] + '=='
    } else if (byteRemainder == 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
  
      a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4
  
      // Set the 2 least significant bits to zero
      c = (chunk & 15)    <<  2 // 15    = 2^4 - 1
  
      base64 += encodings[a] + encodings[b] + encodings[c] + '='
    }
    
    return base64
  }

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        if (request.method === "OPTIONS") {
            return handleOptions(request)
        //}
        /*else if (url.pathname === '/image') {
            return handleImageRequest(env, 'image');
        } else if (url.pathname === '/background') {
            return handleImageRequest(env, 'background');
        } else if(url.pathname === '/generate')
        {
            await getDailyImage(env);
            return new Response("images downloaded", { status: 200 });
        */
        } else {
            return handleRequest(request, env);
        }
    },
    async scheduled(event, env, ctx) {
        ctx.waitUntil(getDailyImage(env));
    }
};