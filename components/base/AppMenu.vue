<template>
  <nav
    id="main-nav"
    :class="toggleOpenClass"
  >
    <div class="main-nav__logo">
      <nuxt-link to="/" >Tomas Zukovskij</nuxt-link>
    </div>
    <div
      v-if="isMobile"
      class="main-nav__hamburger"
      @click="toggleMenu"
    >
      {{ toggleMenuText }}
    </div>
    <div
      class="main-nav__menu"
      :class="toggleOpenClass"
      @click="closeMenu"
    >
      <nuxt-link to="/people" >People</nuxt-link>
      <nuxt-link to="/lookbook" >LookBook</nuxt-link>
      <nuxt-link to="/exhibitions" >Exhibitions</nuxt-link>
      <nuxt-link to="/coincidences" >Coincidences</nuxt-link>
      <nuxt-link to="/about" >About me</nuxt-link>
      <a href="https://baltikrastai.lt" target="_blank">Print store</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppMenu',
  data() {
    return {
      openMenu: false,
    };
  },
  beforeRouteEnter(to, from) {
    this.closeMenu();
  },
  computed: {
    isMobile() {
      return this.$mq === 'sm';
    },
    toggleOpenClass() {
      return this.openMenu ? 'open' : '';
    },
    toggleMenuText() {
      return this.openMenu ? 'close' : 'Menu';
    },
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
    closeMenu(e) {
      this.openMenu = false;
    },
  },
}
</script>

<style scoped lang="scss">
#main-nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  padding-left: 20px;
  padding-top: 50px;
  font-size: 1rem;
  @media all and (max-width: 576px) {
    padding: 20px 15px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: static;
    &.open {
      background: #fff;
    }
  }
}
.main-nav__logo a {
  color: #9d8ad8;
}
.main-nav__menu {
  padding-top: 100px;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 576px) {
    position: fixed;
    display: none;
    width: 100%;
    height: calc(100% - 50px);
    background: #fff;
    z-index: 999;
    top: 50px;
    left: 0;

    &.open {
      display: flex;
    }
  }

  a {
    padding: 10px 10px 10px 0;

    @media all and (max-width: 576px) {
      padding: 20px;
      width: 100%;
      text-align: center;
    }

    &.nuxt-link-active {
      color: #9d8ad8;
    }
  }
}
.main-nav__hamburger {
  cursor: pointer;
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
