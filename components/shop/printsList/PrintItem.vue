<template>
  <nuxt-link :to="localePath(`/prints/${item.slug}`)" class="prints-list--item">
    <img
      class="w100 item-img"
      :src="image"
      :alt="title"
    />
    <div class="item-info">
      <div>
        <h2 class="item-title">
          {{ title }}
        </h2>
      </div>
      <span class="item-price">
        {{ price }}€
      </span>
    </div>
  </nuxt-link>
</template>
<script>
import t from "vue-types";
export default {
  props: {
    item: t.object,
  },
  data() {
    return {
      title: this.item.title,
      image: this.item.printSingle.printContent.listImage.sourceUrl,
      slug: this.item.slug,
      price: this.item.printSingle.printContent.price,
      size: this.item.printSingle.printContent.sizes[0].size,
    };
  },
  mounted() {
    console.log('@@@@@@', this.item);
  }
};
</script>
<style lang="scss" scoped>
.prints-list--item {
  width: calc(50% - 32px);
  text-decoration: none;
  color: #0d1821;
  &:hover {
    .item-title {
      color: #006d77;
    }
  }
  @media all and (max-width: 800px) {
    width: calc(50% - 30px);
  }

  @media all and (max-width: 576px) {
    width: calc(50% - 10px);
    .item-size {
      font-size: .8em;
    }
  }
}
.item-price {
  font-size: 1.1em;
  color: #006d77;
  font-weight: 400;

  @media all and (max-width: 576px) {
    font-size: 1em;
  }
}
.item-title {
  position: relative;
  font-size: 1.3em;
  margin: 0;
  transition: color .2s ease-in-out;
  font-weight: 400;

  @media all and (max-width: 576px) {
    font-size: 1em;
  }
}
.item-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  flex-direction: column;
}
</style>
