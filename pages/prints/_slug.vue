<template>
  <div v-if="title">
    <div class="single-page">
      <div class="single-page--side">
        <div class="single-page-main-image">
          <img
            class="w100"
            :src="image"
            :alt="title"
            @click="openDialog(0)"
          />
          <i class="zoom-icon" />
        </div>
        <div v-if="this.gallery.length > 1" class="single-page--gallery">
          <div
            v-for="(imageGallery, index) in sliceGallery"
            :key="imageGallery.id"
            @click="openDialog(index + 1)"
          >
            <img
              :src="imageGallery.url"
              :alt="`title ${imageGallery.id}`"
            />
            <i class="zoom-icon" />
          </div>
        </div>
      </div>
      <div class="single-page--side">
        <h2 class="title">
          {{ title }}
        </h2>
        <span class="price">
          {{ setPrice }}€
        </span>
        <div
          v-if="cycleToShow"
          class="cycle">
          <h3 v-html="cycleToShow"/>
        </div>
        <div class="button-to">
          <div
            class="multiselect-wrap"
            v-if="sizes"
          >
            <label>{{ $t('common.size') }} (cm):</label>
            <p>{{ singleSize.size }}</p>
          </div>
          <div
            class="multiselect-wrap"
          >
            <label>{{ $t('common.frame') }}:</label>
            <p>{{$t('common.withFrame')}}</p>
          </div>
          <div
            v-if="selectedFrame.value"
            class="multiselect-wrap multiselect-wrap__frame-note"
          >
            {{ aboutSizeShow }}
          </div>

          <div class="howItLooks">
            <a-button
              type="b"
              :title="$t('printSingle.variations')"
              :action="scrollToVariations"
              view="bare"
              :disabled="false"
            />
          </div>
          <a-button
            type="b"
            class="addToCart"
            :title="addToCartText"
            :action="addToCart"
            :view="addToCartView"
            :disabled="addToCartDisabled"
          />
          <div v-if="addedToCart">
            <a-button
              type="link"
              :title="$t('common.viewToCart')"
              to="/checkout"
              view="secondary"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="single-page single-page--description">
      <div class="single-page--side">
        <div class="single-description">
          <h4>{{$t('printSingle.description')}}</h4>
          <div v-html="descriptionToShow"></div>
        </div>
      </div>
      <div class="single-page--side">
        <div class="highlights">
          <h4>{{ $t('printSingle.highLights.title') }}</h4>
          <ul>
            <li>{{ $t('printSingle.highLights.freeShipping') }}</li>
            <li>{{ $t('printSingle.highLights.original') }}</li>
            <li>{{ $t('printSingle.highLights.printedOnPaper') }}</li>
            <li>{{ $t('printSingle.highLights.onlyTwenty') }}</li>
            <li>{{ $t('printSingle.highLights.signed') }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div ref="variations" class="single-page--variations single-description">
      <h4>{{$t('printSingle.variations')}}</h4>
      <ul>
        <li v-for="(variation, index) in printVariations" :key="index" >
          <div>
            <p v-html="variation.text" v-if="currentLocale === 'lt'" />
            <p v-html="variation.text_en" v-else />
            <img :src="variation.image.url" alt="variation.image.alt">
          </div>
          <div>
            <iframe :src="variation.video" class="iframe" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </li>
      </ul>
    </div>
    <dialog-modal
      v-if="showDialogModal"
      :images="gallery"
      :current-image-to-show="currentImageToDisplay"
      @close="hideDialogModal()"
    />
  </div>
</template>
<script>
import t from "vue-types";
import { mapState, mapActions } from "vuex";
import AButton from "~/components/common/AButton.vue";
import DialogModal from "~/components/dialog/DialogModal.vue";
import {FETCH_PRINTS_LIST, ADD_ITEM_TO_CHECKOUT} from '~/store/actionTypes';

export default {
  components: {
    AButton,
    DialogModal,
  },
  layout: 'store',
  props: {
    itemSlug: t.string,
  },
  data() {
    return {
      selected: null,
      selectedFrame: {
        label: this.$t('common.withFrame'),
        value: true,
      },
      title: "",
      image: "",
      aboutSize: "",
      aboutSizeEn: "",
      currentItem: "",
      description: "",
      descriptionEn: "",
      aboutCycle: "",
      aboutCycleEn: "",
      price: 0,
      stripePrice: "",
      sizes: [],
      singleSize: [],
      frame: [
        {
          label: this.$t('common.withFrame'),
          value: true,
        },
      ],
      gallery: [],
      link: '',
      slug: '',
      currentImageToDisplay: 0,
      showDialogModal: false,
      addedToCart: false,
      addToCartDisabled: false,
      printVariations: [],
    };
  },
  head() {
    return {
      title: `${this.title} - Baltikraštai`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        }
      ],
    };
  },
  computed: {
    ...mapState('printStore', ['printsList']),
    setPrice() {
      if (this.selectedFrame.value) return this.selected.price_with_frame;
      return this.selected.price;
    },
    setSize() {
      return this.selected ? this.selected.size : this.sizes[0].size;
    },
    setStripePrice() {
      if (this.selectedFrame.value) return this.selected.stripe_price_passeport;
      return this.selected.stripePrice;
    },
    sliceGallery() {
      return this.gallery.slice(1, 4);
    },
    currentLocale() {
      return this.$i18n.locale;
    },
    descriptionToShow() {
      return this.currentLocale === 'lt' ? this.description : this.descriptionEn;
    },
    cycleToShow() {
      return this.currentLocale === 'lt' ? this.aboutCycle : this.aboutCycleEn;
    },
    aboutSizeShow() {
      return this.currentLocale === 'lt' ? this.aboutSize : this.aboutSizeEn;
    },
    addToCartView() {
      return this.addedToCart ? 'active' : '';
    },
    addToCartText() {
      return this.addedToCart ? this.$t('printSingle.addedToCart') : this.$t('common.addToCart');
    }
  },
  async mounted() {
    await this[FETCH_PRINTS_LIST]();
    await this.fetchData();
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent');
    }
  },
  methods: {
    ...mapActions('printStore', [FETCH_PRINTS_LIST]),
    ...mapActions('checkoutStore', [ADD_ITEM_TO_CHECKOUT]),
    fetchData() {
      const { title, ACF, link, slug } = (this.currentItem = this.printsList.find(
        (element) => {
          return element.slug === this.$route.params.slug;
        }
      ));
      const acfPath = ACF.print_content;
      this.title = title.rendered;
      this.image = acfPath.gallery[0].url;
      this.description = acfPath.description;
      this.descriptionEn = acfPath.description_en;
      this.price = acfPath.price;
      this.sizes = acfPath.sizes;
      this.gallery = acfPath.gallery;
      this.stripePrice = acfPath.stripePrice
      this.link = link;
      this.slug = slug;
      window.scrollTo(0, 0);
      this.selected = this.sizes[0];
      this.singleSize = this.sizes[0];
      this.aboutSize = acfPath.about_size;
      this.aboutSizeEn = acfPath.about_size_EN;
      this.aboutCycle = acfPath.about_cycle;
      this.aboutCycleEn = acfPath.about_cycle_en;
      this.printVariations = acfPath.print_variations;
    },
    openDialog(index) {
      this.currentImageToDisplay = index;
      this.showDialogModal = true;
    },
    hideDialogModal() {
      this.showDialogModal = !this.showDialogModal;
    },
    addToCart() {
      this.addedToCart = true;

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'AddToCart', {
          content_name: this.title,
          value: this.setPrice,
        });
      }
      const payload = {
        title: this.title,
        image: this.image,
        price: this.setPrice,
        stripePrice: this.setStripePrice,
        quantity: 1,
        size: this.setSize,
        link: this.link,
        slug: this.slug,
        selectedFrame: this.selectedFrame.value,
      }
      this.addToCartDisabled = true;
      this[ADD_ITEM_TO_CHECKOUT](payload);
    },
    proceedToCheckout() {
      this.$router.push({ name: 'Checkout'});
    },
    scrollToVariations() {
      this.$refs.variations.scrollIntoView({ behavior: "smooth" })
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/printItem";
</style>
