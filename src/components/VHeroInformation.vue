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
});
</script>

<template>
  <div class="hero-info" :style="{ backgroundColor: background }">
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
    <VButton :color="colorLink || 'secondary'" type="link" to="/"
      >View collection</VButton
    >
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
    &__title {
      font-family: var(--clash);
      font-size: 32px;
      line-height: 1.4;
      font-weight: 400;
      margin: 0 0 20px 0;
    }
    &__description {
      font-family: "Satoshi";
      font-size: 18px;
      line-height: 1.5;
      color: var(--midle-grey);
    }
  }
}
</style>
