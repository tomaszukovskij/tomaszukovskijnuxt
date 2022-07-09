<template>
  <nav id="main-nav">
    <div class="main-nav__logo">
      <nuxt-link to="/" >Tomas Zukovskij</nuxt-link>
    </div>
    <div class="main-nav__menu">
      <nuxt-link to="/about" >About me</nuxt-link>
      <nuxt-link to="/peoples" >Peoples</nuxt-link>
      <nuxt-link to="/exhibitions" >Exhibitions</nuxt-link>
      <nuxt-link to="/coincidences" >Coincidences</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppMenu'
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
}
.main-nav__logo a {
  color: #9d8ad8;
}
.main-nav__menu {
  padding-top: 100px;
  display: flex;
  flex-direction: column;

  a {
    padding: 10px 10px 10px 0;

    &.nuxt-link-active {
      color: #9d8ad8;
    }
  }
}
</style>
