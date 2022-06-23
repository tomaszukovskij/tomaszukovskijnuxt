<template>
  <div id="app">
    <AppMenu />
    <div class="wrapper">
      <nuxt />
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;600;700&display=swap');
</style>
