<template>
  <div>
    <nav id="mobile">
      <nuxt-link
        v-for="locale in locales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="changeLocale"
      >
        {{ locale.name }}
      </nuxt-link>
      <a
        class="burger"
        :class="toggleBurgerClass"
        @click="toggleActive"
      >
        <span />
        <span />
        <span />
      </a>
    </nav>
    <div
      v-if="menuOpen"
      id="mobile-menu"
    >
      <nuxt-link
        :to="localePath('/')"
        @click.native="toggleActive"
      >
        {{ $t('homePage.title') }}
      </nuxt-link>
      <nuxt-link
        :to="localePath('/about')"
        @click.native="toggleActive"
      >
        {{ $t('about.title') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
export default {
  name: 'PageHeaderMobileMenu',
  props: {
    burgerActive: t.bool,
    menuOpen: t.bool,
    toggleActive: t.func,
    changeLocale: t.func,
    currentLocale: t.string,
    locales: t.array,
  },
  computed: {
    toggleBurgerClass() {
      return this.burgerActive ? 'active' : '';
    }
  },
}
</script>

<style scoped lang="scss">

.burger {
  text-decoration: none;
  color: #232323;
  //transition: color 0.3s ease;
  position: relative;
  z-index: 1;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: 20px;
}

.burger span
{
  display: block;
  width: 25px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: #232323;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  //transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
  //background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
  //opacity 0.55s ease;
  &:last-child {
    margin-bottom: 0;
  }
}

.burger span:first-child
{
  transform-origin: 0% 0%;
}

.burger span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

.burger.active span:nth-last-child(3)
{
  opacity: 1;
  transform: rotate(45deg) translate(-0px, -2px);
}

.burger.active span:nth-last-child(2)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.burger.active span:nth-last-child(1)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#mobile {
  text-align: center;
  position: absolute;
  top: 35px;
  right: 70px;
  display: none;
  align-items: center;

  @media all and (max-width: 576px) {
    display: flex;
  }
}

#mobile-menu {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 99;
  left: 0;
  top: 70px;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: #0d1821;
    font-size: 1.1rem;
    padding: 10px 24px;

    &.router-link-active {
      color: #f96363;
    }
  }
}
.changeLocale {
  text-decoration: none;
  font-weight: 400;
}
</style>
