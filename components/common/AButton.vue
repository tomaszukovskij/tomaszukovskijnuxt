<template>
  <a
    v-if="type === 'a'"
    :href="url" target="_blank"
    :class="setClass"
  >
    {{ title }}
  </a>
  <button
    v-else-if="type === 'b'"
    :class="setClass"
    :disabled="disabled"
    @click.prevent="action"
  >
    {{ title }}
  </button>
  <nuxt-link
    v-else-if="type === 'link'"
    :to="to"
    :class="setClass"
  >
    {{ title }}
  </nuxt-link>
</template>
<script>
import t from "vue-types";
export default {
  props: {
    url: t.string,
    title: t.string,
    width: t.string,
    type: t.string,
    view: t.string,
    to: t.string,
    action: t.func,
    disabled: t.bool,
  },
  computed: {
    setClass() {
      return {
        'half-width': this.width === "half",
        'auto': this.width === "auto",
        'bare': this.view === 'bare',
        'link': this.view === 'link',
        'secondary': this.view === 'secondary',
        'active': this.view === 'active',
      }
    },
  },
};
</script>
<style lang="scss" scoped>
a,
button {
  padding: 19px 15px;
  border: 1px solid #0d1821;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.12s ease-in-out;
  text-align: center;
  background: #2f3031;
  color: #fff;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;

  &:hover {
    background: #0d1821;
  }

  &.half-width {
    width: 50%;
    @media all and (max-width: 1024px) {
      width: 100%;
    }
  }

  &.auto {
    width: auto;
    @media all and (max-width: 576px) {
      width: 100%;
    }
  }

  &.bare, .link {
    padding: 0;
    border: 0;
    border-radius: 0;
    text-decoration: underline;
    background: none;
    color: #2f3031;
    width: auto;
    &:hover {
      text-decoration: none;
    }
  }
  &[disabled] {
    background: #7d8083;
    border-color: #7d8083;
    cursor: auto;
  }
  &.active {
    background: #81b29a;
    border-color: #81b29a;
  }
  &.secondary {
    background: #e07a5f;
    color: #fff;
    border-color: #e07a5f;
    margin-top: 20px;
  }
}
</style>
