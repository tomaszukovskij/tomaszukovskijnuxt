<template>
  <div>
    <div class="wrapper">
      <h1>Page not found</h1>
      <p v-if="statusCode === 404">
        <nuxt-link to="/">Return to homepage</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
export default {
  name: 'ErrorPage',
  props: {
    error: t.object,
  },
  head() {
    return {
      title: this.message
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    },
  },
  mounted() {
    this.$store.dispatch('updateMenuOpen', false)
  },
}
</script>

<style scoped>

</style>
