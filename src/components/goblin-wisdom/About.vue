<template>
  <div class="about">
    <div class="button">
      <RouterLink to="/">Back</RouterLink>
    </div>
    <h1 class="p-8 text-center text-4xl">About</h1>
    <p>Your daily quote from the goblins of Magic: The Gathering.</p>
    <p>
      This website uses data and images provided by Scryfall, which are subject
      to the Wizards of the Coast Fan Content Policy.
    </p>
    <p>The rights to the images and data are owned by Wizards of the Coast.</p>
    <p>
      This website is not endorsed by or affiliated with Scryfall or Wizards of
      the Coast.
    </p>
    <p class="pt-8">
      Loading SVG credits:
      <a href="https://codepen.io/eluc/pen/qmvKEY" target="_blank">@eluc</a>
    </p>
    <div class="flex place-content-center pt-8">
      <a href="https://ko-fi.com/Z8Z414ASRG" target="_blank">
        <img
          height="36"
          style="border: 0px; height: 36px"
          src="https://storage.ko-fi.com/cdn/kofi5.png?v=3"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
    </div>
  </div>
</template>

<style lang="css">
.about {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @apply flex max-w-prose flex-col place-content-center rounded-lg p-8 text-xl tracking-wide text-white md:text-2xl;
}

.button {
  @apply max-w-fit rounded bg-orange-900/50 px-4 py-2 hover:bg-orange-900;
}
</style>
