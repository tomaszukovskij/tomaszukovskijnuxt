<template>
  <ul :class="{ 'row': isSuccessPage }">
    <li
      v-for="(item, index) in checkoutList"
      :key="index"
    >
      <nuxt-link :to="localePath(`/prints/${item.slug}`)">
        <div class="checkout__image">
          <img
            :src="item.image"
            :alt="item.title"
            class="w100"
          >
        </div>
        <div class="checkout__item">
          <h3>
            {{ item.title }}
          </h3>
          <p>
            {{ $t('common.size') }}:
            <b>
              {{ item.size }}
            </b>
          </p>
          <p v-if="!isSuccessPage">
            {{ $t('common.price') }}:
            <b>
              {{ item.price }}€
            </b>
          </p>
          <p v-if="!isSuccessPage">
            {{ $t('common.frame') }}:
            <b>
              {{ setPassportText(item) }}
            </b>
          </p>
          <button
            v-if="!isSuccessPage"
            :id="`remove-${index}`"
            @click.prevent="removeItem(index)">
              {{ $t('common.remove') }}
          </button>

        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import t from 'vue-types';
import { mapState, mapActions } from 'vuex';
import AButton from "../common/AButton.vue";
import { REMOVE_ITEM_FROM_CHECKOUT } from '~/store/actionTypes';

export default {
  name: 'CheckoutList',
  components: {
    AButton,
  },
  props: {
    isSuccessPage: t.bool.def(false),
  },
  computed: {
    ...mapState('checkoutStore', ['checkoutList']),
  },
  methods: {
    ...mapActions('checkoutStore', [REMOVE_ITEM_FROM_CHECKOUT]),
    removeItem(index) {
      this[REMOVE_ITEM_FROM_CHECKOUT](index);
    },
    setPassportText(item) {
      return item.selectedFrame ? this.$t('common.withFrame') : this.$t('common.noFrame');
    }
  },
}
</script>

<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  &.row {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    @media all and (max-width: 1024px) {
      gap: 0;
    }

    li {
      width: 30%;
      @media all and (max-width: 1024px) {
        width: 50%;
      }
      @media all and (max-width: 800px) {
        width: 100%;
      }
    }
  }
  li a {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 20px;
    text-decoration: none;
    color: #0d1821;
  }
  .checkout__image {
    width: 120px;
    margin-right: 20px;
  }
  .checkout__item {
    width: calc(100% - 140px);
  }
}
h3 {
  margin-top: 0;
  @media all and (max-width: 576px) {
    font-size: 1em;
  }
}
p {
  margin: 5px 0;
}
button {
  display: inline-block;
  transition: all 0.12s ease-in-out;
  text-align: center;
  background: #2f3031;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
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
</style>
