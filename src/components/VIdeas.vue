<script setup>
import VHeroInformation from "@/components/VHeroInformation.vue";
</script>

<template>
  <div class="ideas">
    <VHeroInformation
      title="It started with a small idea"
      description="A global brand with local beginnings, our story begain in a small studio in South London in early 2014"
      colorTitle="#fff"
      colorDescription="#fff"
      background="var(--dark-primary)"
      colorLink="secondary"
    />
    <img src="/img/product-5.jpg" alt="image" />
  </div>
</template>

<style lang="scss" scoped>
.ideas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  padding: 0 80px;
  margin-bottom: 60px;
}
</style>
