<template>
  <header>
    <div id="logo">
      <nuxt-link to="/" >Tomas Zukovskij</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
