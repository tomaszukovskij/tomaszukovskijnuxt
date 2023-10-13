<template>
  <div @click="hideDialog($event)">
    <div class="dialog--overlay"></div>
    <div class="dialog--content">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        class="gallery--image"
        :class="setActiveImage(index)"
      >
        <img
          :src="image.url"
        />
      </div>
      <button class="btn btn--arrow btn--next" @click.prevent="next"></button>
      <button class="btn btn--arrow btn--prev" @click.prevent="prev"></button>
    </div>
    <button class="btn btn--close" @click.prevent="close">X</button>
  </div>
</template>
<script>
import t from "vue-types";
export default {
  props: {
    images: t.array,
    currentImageToShow: t.number,
  },
  emits: ["close"],
  data() {
    return {
      current: 0,
    };
  },
  computed: {
    getImagesLength() {
      return this.images.length - 1;
    },
  },
  mounted() {
    this.current = this.currentImageToShow;
    this.moveWithArrows();
  },
  methods: {
    setActiveImage(index) {
      return index === this.current ? "active" : "";
    },
    next() {
      this.current === this.getImagesLength
        ? (this.current = 0)
        : this.current++;
    },
    prev() {
      this.current === 0
        ? (this.current = this.getImagesLength)
        : this.current--;
    },
    close() {
      this.$emit("close");
    },
    hideDialog(event) {
      if (
        event.target.nodeName !== "IMG" &&
        event.target.nodeName !== "BUTTON"
      ) {
        this.close();
      }
    },
    moveWithArrows() {
      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          this.next();
        }

        if (e.key === "ArrowLeft") {
          this.prev();
        }

        if (e.key === "Escape") {
          this.close();
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.dialog--overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #2c3e50;
  opacity: 0.5;
  top: 0;
  left: 0;
  z-index: 10;
}
.dialog--content {
  position: fixed;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 800px) {
    width: 90%;
  }
}
.gallery--image {
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    height: 100%;
    @media all and (max-width: 800px) {
      height: 70%;
    }
  }
  &.active {
    display: flex;
  }
}
.btn {
  min-width: 50px;
  min-height: 50px;
  border-radius: 100%;
  background: #fff;
  display: inline-block;
  border: 0;
  outline: 0;
  text-align: center;
  line-height: 1;
  padding: 12px;
  z-index: 2;
  cursor: pointer;
  &--arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  &--prev {
    left: 0;
    background-image: url("../../assets/img/arrow-left-solid.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 15px;
  }
  &--next {
    right: 0;
    background-image: url("../../assets/img/arrow-right-solid.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 15px;
  }
  &--close {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 11;
    background-image: url("../../assets/img/times-solid.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 15px;
  }
}
</style>
