<template>
  <nav id="main-nav">
    <div class="main-nav__logo">
      <nuxt-link to="/" >Tomas Zukovskij</nuxt-link>
    </div>
    <div class="main-nav__menu">
      <nuxt-link to="/peoples" >Peoples</nuxt-link>
      <nuxt-link to="/exhibitions" >Exhibitions</nuxt-link>
      <nuxt-link to="/for-myself" >For myself</nuxt-link>
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
}
.main-nav__menu {
  padding-top: 100px;
  display: flex;
  flex-direction: column;

  a {
    padding: 10px 10px 10px 0;
  }
}
</style>
