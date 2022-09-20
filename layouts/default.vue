<template>
  <div id="app">
    <app-menu />
    <main>
      <transition name="home">
        <nuxt />
      </transition>
    </main>
    <app-footer />
  </div>
</template>
<script>
export default {
  name: 'DefaultPage',
}
</script>

<style lang="scss">
@import "./assets/styles/common.scss";
@import "./assets/styles/typography.scss";
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300&family=Raleway:wght@200;400;600;700&display=swap');
.home-enter-active, .home-leave-active {
  transition: opacity .5s;
  @media all and (max-width: 576px) {
    transition: opacity .1s;
  }
}
.home-enter, .home-leave-active {
  opacity: 0;
}
</style>
