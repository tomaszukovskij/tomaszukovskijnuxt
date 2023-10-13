<template>
  <header>
    <nuxt-link
      :to="localePath('/')"
      class="logo"
      @click="close"
    >
      Balti kraštai
    </nuxt-link>
    <nav id="nav">
      <nuxt-link
        :to="localePath('/about')"
      >
        {{ $t('about.title') }}
      </nuxt-link>
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="main-nav__change-language"
      >
        {{ locale.name }}
      </nuxt-link>
    </nav>
    <page-header-mobile-menu
      :burger-active="burgerActive"
      :menu-open="menuOpen"
      :toggle-active="toggleActive"
      :change-locale="changeLocale"
      :current-locale="currentLocale"
      :locales="availableLocales"
    />
    <nuxt-link
      id="cart"
      :to="localePath('/checkout')"
      @click="close"
    >
      <transition name="bounce">
        <i v-if="checkoutItemsLength">{{ checkoutItemsLength }}</i>
      </transition>
    </nuxt-link>
  </header>
</template>
<script>
import PageHeaderMobileMenu from './PageHeaderMobileMenu';
import { CHANGE_CURRENT_LOCALE } from '~/store/actionTypes';

export default {
  components: {
    PageHeaderMobileMenu,
  },
  data() {
    return {
      burgerActive: false,
      menuOpen: false,
    }
  },
  computed: {
    currentLocale() {
      return this.$store.state.checkoutStore.currentLocale;
    },
    checkoutItemsLength() {
      return this.$store.getters['checkoutStore/checkoutItemsLength'];
    },
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  },
  methods: {
    toggleActive() {
      this.burgerActive = !this.burgerActive;
      this.menuOpen = !this.menuOpen;
      const bodyEl = document.querySelector('body');
      if(bodyEl.classList.contains('ovh')) {
        bodyEl.classList.remove('ovh');
      }
      bodyEl.classList.add('ovh');
    },
    close() {
      this.burgerActive = false;
      this.menuOpen = false;
      document.querySelector('body').classList.remove('ovh');
    },
    changeLocale() {
      this.$store.dispatch(`checkoutStore/${[CHANGE_CURRENT_LOCALE]}`);
    },
  }
}
</script>
<style lang="scss" scoped>
header {
  max-width: 1400px;
  padding: 50px 24px 0;
  width: 100%;
  margin: 0 auto;
  @media all and (max-width: 800px) {
    padding-top: 20px;
  }
}
.logo {
  padding: 25px 5px 25px 70px;
  display: inline-block;
  font-size: 1.5em;
  color: #0d1821;
  text-decoration: none;
  position: relative;
  font-weight: 400;
  &::before {
    content: "";
    width: 55px;
    height: 55px;
    background: url("../../assets/img/logo.jpg") top left no-repeat;
    background-size: 55px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    @media all and (max-width: 800px) {
      width: 35px;
      height: 35px;
      background: url("../../assets/img/logo.jpg") top left no-repeat;
      background-size: 35px;
    }
  }

  @media all and (max-width: 800px) {
    font-size: 1em;
    padding: 15px 5px 15px 50px;
  }
}
#cart {
  width: 50px;
  height: 50px;
  background: url("../../assets/img/shopping-cart-solid.svg") center center no-repeat;
  background-size: 20px;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 60px;
  right: 50px;
  cursor: pointer;
  z-index: 10;

  @media all and (max-width: 1400px) {
    right: 20px;
  }

  @media all and (max-width: 800px) {
    top: 20px;
    right: 10px;
  }
  i {
    background: #f96363;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #fff;
    display: inline-block;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    position: absolute;
    top: 7px;
    right: -2px;
  }
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

#nav {
  text-align: center;
  position: absolute;
  top: 60px;
  right: 120px;

  @media all and (max-width: 1400px) {
    right: 80px;
  }

  @media all and (max-width: 800px) {
    top: 20px;
  }

  @media all and (max-width: 576px) {
    display: none;
  }

  a {
    font-weight: 500;
    color: #2c3e50;
    text-decoration: none;
    line-height: 50px;
    padding: 0 15px;

    &.router-link-exact-active {
      position: relative;
      &::before {
        content: '';
        width: calc(100% - 30px);
        height: 1px;
        background: #f96363;
        position: absolute;
        bottom: -5px;
        left: 15px;
      }
    }
  }
}

.ovh {
  overflow: hidden;
}

</style>
