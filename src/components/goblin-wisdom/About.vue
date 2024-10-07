<template>
    <div class="about">
        <div class="button">
            <RouterLink to="/">Back</RouterLink>
        </div>
        <h1 class="text-6xl text-center p-8">About</h1>
        <p>This website uses data and images provided by Scryfall, which are subject to the Wizards of the Coast Fan
            Content Policy.</p>
        <p>The rights to the images and data are owned by Wizards of the Coast.</p>
        <p>This website is not endorsed by or affiliated with Scryfall or Wizards of the Coast.</p>
        <p class="pt-8">Loading SVG credits: <a href="https://codepen.io/eluc/pen/qmvKEY" target='_blank'>@eluc</a></p>
        <div class="pt-8 flex place-content-center">
            <a class="pt-1" href='https://ko-fi.com/Z8Z414ASRG' target='_blank'>
                <img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=3'
                    border='0' alt='Buy Me a Coffee at ko-fi.com' />
            </a>
            <div class="button ml-8 mb-4">
                <RouterLink to="/blog">My Blog</RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="css">
.about {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    @apply max-w-prose flex flex-col place-content-center text-white p-8 rounded-lg text-2xl tracking-wide;
}

.button {
    @apply bg-orange-900/50 hover:bg-orange-900 py-2 px-4 max-w-fit rounded;
}
</style>