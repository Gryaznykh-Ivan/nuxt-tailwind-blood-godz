<template>
  <div class="container m-auto flex items-center">
    <Logo />
    <div class="pl-32 flex h-5 items-center space-x-8 text-white">
      <nuxt-link class="" active-class="box-border border-pink border-b-2 text-pink border-opacity-20" to="/">Главная</nuxt-link>
      <nuxt-link class="" active-class="box-border border-pink border-b-2 text-pink border-opacity-20" to="/top">Топ игроков</nuxt-link>
      <nuxt-link class="" active-class="box-border border-pink border-b-2 text-pink border-opacity-20" to="/lobby">Лобби</nuxt-link>
      <nuxt-link class="flex items-center text-gold font-medium" to="/premium">
        <svg
          class="mr-1"
          width="23"
          height="17"
          viewBox="0 0 23 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6847 3.77363C22.413 3.5417 22.0296 3.49283 21.7083 3.64925L16.7918 6.04268L12.1787 0.723844C12.0081 0.527086 11.7605 0.414062 11.5 0.414062C11.2396 0.414062 10.9919 0.527086 10.8213 0.723844L6.20817 6.04264L1.29174 3.6492C0.970412 3.49283 0.587049 3.54166 0.315272 3.77359C0.0434943 4.00552 -0.065037 4.37649 0.0388673 4.71834L3.45293 15.9488C3.56797 16.3273 3.91697 16.5859 4.31251 16.5859H18.6875C19.083 16.5859 19.432 16.3273 19.547 15.9489L22.9611 4.71839C23.0651 4.37653 22.9565 4.00557 22.6847 3.77363ZM18.0215 14.7891H4.97839L2.35715 6.1664L6.04173 7.96017C6.40758 8.13824 6.84718 8.04831 7.1137 7.74104L11.5 2.68374L15.8864 7.74104C16.1528 8.04836 16.5926 8.1382 16.9583 7.96017L20.6429 6.1664L18.0215 14.7891Z"
            fill="#FFD260"
          />
        </svg>
        BloodGodz premium
      </nuxt-link>
      <div class="border-l-2 pl-1 border-pink cursor-pointer">RUS</div>
    </div>
  </div>
</template>