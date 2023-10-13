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
import { mapActions } from 'vuex';

export default {
  name: 'DefaultPage',
  mounted() {
    this.getCurrentLocale();
  },
  methods: {
    ...mapActions(['getCurrentLocale']),
  }
}
</script>

<style lang="scss">
@import "./assets/styles/common.scss";
@import "./assets/styles/typography.scss";
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Josefin+Sans:wght@200;400;500;700&display=swap');
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
