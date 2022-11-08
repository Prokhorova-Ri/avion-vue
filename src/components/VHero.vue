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
    <img class="hero-image" src="/img/hero.jpg" alt="" />
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
  @media screen and (max-width: 767px) {
    display: block;
    height: auto;
    background: transparent;
    padding-right: 0;
  }
  &-image {
    max-width: 100%;
    margin-top: 32px;
    display: none;
    @media screen and (max-width: 767px) {
      display: block;
    }
  }
}
</style>
