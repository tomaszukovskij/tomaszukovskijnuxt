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
    <ul
      class="main-nav__menu"
      :class="toggleOpenClass"
      @click="closeMenu"
    >
      <li class="main-nav__menu__has-children">
        <span class="main-nav__span">Paslaugos</span>
        <ul class="main-nav__submenu">
          <li>
            <nuxt-link to="/portraits" >Portretai</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/lookbook" >LookBook ir produktai</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="main-nav__menu__has-children">
        <span class="main-nav__span">Portfolio</span>
        <ul class="main-nav__submenu">
          <li>
            <nuxt-link to="/portraits" >Peoples</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/coincidences" >Coincidences</nuxt-link>
          </li>
        </ul>
      </li>
      <li>
        <nuxt-link to="/exhibitions" >Exhibitions</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about" >About me</nuxt-link>
      </li>
      <li>
        <a href="https://baltikrastai.lt" target="_blank">Print store</a>
      </li>
    </ul>
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
      this.$store.commit('setState', true)
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
  width: 100%;
  padding: 15px 20px;
  background: #fff;
  z-index: 100;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: #006d77;
}
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  li {
    position: relative;
  }
}
.main-nav__menu {
  display: flex;

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

  a, span {
    padding: 10px 20px;
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;

    @media all and (max-width: 576px) {
      padding: 20px;
      width: 100%;
      text-align: center;
    }

    &.nuxt-link-active {
      color: #006d77;
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
.main-nav__submenu {
  position: absolute;
  background: #fff;
  z-index: 2;
  top: 30px;
  left: 0;
  display: none;
}
.main-nav__menu__has-children {
  &:hover {
    .main-nav__submenu {
      display: block;
    }
  }
}
</style>
