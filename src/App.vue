<script setup>
import VHeader from "@/components/Layout/VHeader.vue";
import VFooter from "@/components/Layout/VFooter.vue";
</script>

<template>
  <div class="container">
    <VHeader />
    <RouterView />
    <VFooter />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/global.scss";
</style>
