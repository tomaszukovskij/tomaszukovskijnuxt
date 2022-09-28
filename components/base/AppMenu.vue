<template>
  <nav
    id="main-nav"
    :class="toggleOpenClass"
  >
    <div class="main-nav__logo">
      <nuxt-link :to="localePath('/')">Tomas Zukovskij</nuxt-link>
    </div>
    <div class="main-nav__wrapper">
      <ul
        class="main-nav__menu"
        :class="toggleOpenClass"
      >
        <li class="main-nav__menu__has-children">
        <span
          class="main-nav__span"
          @click="showChildMenu('firstChild')"
        >
          <p>{{ $t('menu.services') }}</p>
        </span>
          <ul
            ref="firstChild"
            class="main-nav__submenu">
            <li>
              <nuxt-link :to="localePath('portraits')">{{ $t('services.portraits') }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('business')">{{ $t('services.business') }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('lookbook')">{{ $t('services.lookbook' )}}</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="main-nav__menu__has-children">
        <span
          class="main-nav__span"
          @click="showChildMenu('secondChild')"
        >
          <p>{{ $t('menu.portfolio') }}</p>
        </span>
          <ul
            ref="secondChild"
            class="main-nav__submenu">
            <li>
              <nuxt-link :to="localePath('people')">{{ $t('menu.peoples') }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('coincidences')">{{ $t('menu.coincidences') }}</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link :to="localePath('exhibitions')">{{ $t('menu.exhibitions') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('about')">{{ $t('menu.aboutMe') }}</nuxt-link>
        </li>
        <li>
          <a href="https://baltikrastai.lt" target="_blank">{{ $t('menu.store') }}</a>
        </li>
      </ul>
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="main-nav__change-language"
      >
        {{ locale.name }}
      </nuxt-link>
      <div
        v-if="isMobile"
        class="main-nav__hamburger"
        @click="toggleMenu"
      >
        {{ toggleMenuText }}
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AppMenu',
  data() {
    return {
      openMenu: false,
    };
  },
  computed: {
    ...mapState(['currentLocale']),
    isMobile() {
      return this.$mq === 'sm';
    },
    toggleOpenClass() {
      return this.isMenuOpen ? 'open' : '';
    },
    toggleMenuText() {
      return this.isMenuOpen ? 'close' : 'Menu';
    },
    isMenuOpen() {
      return this.$store.state.menuOpen;
    },
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    ...mapActions(['changeCurrentLocale']),
    toggleMenu() {
      this.openMenu = !this.openMenu;
      this.$store.dispatch('updateMenuOpen', !this.isMenuOpen)
    },
    closeMenu(e) {
      this.$store.dispatch('updateMenuOpen', false)
    },
    changeLocale() {
      this.changeCurrentLocale();
    },
    addClassToBody() {
      const body = document.querySelector('body');
      if (this.$store.state.menuOpen) {
        body.classList.add('ovh');
      } else {
        body.classList.remove('ovh');
      }
    },
    showChildMenu(ref) {
      // this.$refs.firstChild.classList.remove('show');
      // this.$refs.secondChild.classList.remove('show');
      this.$refs[ref].classList.contains('show')
        ? this.$refs[ref].classList.remove('show')
        : this.$refs[ref].classList.add('show');
    }
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
    padding: 20px 30px;
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
  @media all and (max-width: 576px) {
    padding-top: 50px;
  }
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
      flex-direction: column;
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
  padding: 10px 0;
  top: 30px;
  left: 0;
  display: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  @media all and (max-width: 576px) {
    position: static;
    width: 100%;
    box-shadow: none;
    top: 0;
    background: #f1f1f1;
    &.show {
      display: block;
    }
  }
}
.main-nav__menu__has-children {
  &:hover {
    @media all and (min-width: 577px) {
      .main-nav__submenu {
        display: block;
      }
    }
    .main-nav__span p::after {
      transform: rotate(180deg);
      transform-origin: right center;
      right: 12px;
    }
  }
}
.main-nav__span {
  cursor: pointer;
  p {
    padding-right: 20px;
    margin: 0;
    position: relative;
    display: inline-block;
    &::after {
      content: "";
      width: 20px;
      height: 20px;
      background: url("../../assets/img/angle-down-solid.svg") right center no-repeat;
      background-size: 12px;
      position: absolute;
      top: 50%;
      right: 0;
      margin-top: -10px;
    }
  }
}
.main-nav__wrapper {
  display: flex;
  align-items: center;
}
.main-nav__change-language {
  padding: 10px;
}
</style>
