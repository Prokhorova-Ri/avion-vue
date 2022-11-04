<script setup>
import VHeroInformation from "@/components/VHeroInformation.vue";
</script>

<template>
  <div class="hero">
    <VHeroInformation
      title="Luxury homeware for people who love timeless design quality"
      description="Shop the new Spring 2022 collection today"
      link="View collection"
      colorLink="lightgrey"
    />
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  background: url("/img/hero.jpg");
  height: 704px;
  background-size: cover;
  justify-content: flex-end;
  padding-right: 80px;
  &-img {
    max-width: 100%;
  }
}
</style>
