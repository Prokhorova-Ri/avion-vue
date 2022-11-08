<script setup>
import VButton from "@/components/UI/VButton.vue";
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  colorTitle: {
    type: String,
    default: "",
  },
  colorDescription: {
    type: String,
    default: "#5b5676",
  },
  background: {
    type: String,
    default: "#fff",
  },
  colorLink: {
    type: String,
    default: "#2a254b",
  },
  mobilePadding: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="hero-info-container">
    <div
      class="hero-info"
      :style="{ backgroundColor: background }"
      :class="{ 'hero-info--mobile-padding': mobilePadding }"
    >
      <div class="hero-info-text">
        <h2 class="hero-info__title" :style="{ color: colorTitle }">
          {{ title }}
        </h2>
        <span
          class="hero-info__description"
          :style="{ color: colorDescription }"
          >{{ description }}</span
        >
      </div>
      <VButton
        :mobileFullWidth="true"
        :color="colorLink || 'secondary'"
        type="link"
        to="/"
        >View collection</VButton
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  &-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    max-width: 630px;
    min-height: 444px;
    padding: 50px 55px;
    align-items: flex-start;
    @media screen and (max-width: 767px) {
      padding: 47px 0 32px 0;
      min-height: 0;
    }
    &-text {
      @media screen and (max-width: 767px) {
        margin-bottom: 32px;
      }
    }
    &__title {
      font-family: var(--clash);
      font-size: 32px;
      line-height: 1.4;
      font-weight: 400;
      margin: 0 0 20px 0;
      @media screen and (max-width: 767px) {
        font-size: 20px;
      }
    }
    &__description {
      font-family: "Satoshi";
      font-size: 18px;
      line-height: 1.5;
      color: var(--midle-grey);
      @media screen and (max-width: 767px) {
        font-size: 14px;
      }
    }
    &--mobile-padding {
      @media screen and (max-width: 767px) {
        padding: 36px 32px;
      }
    }
  }
}
</style>
