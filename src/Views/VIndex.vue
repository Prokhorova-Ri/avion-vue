<script setup>
import { onMounted, ref } from "vue";
import api from "@/api";

import VLoader from "@/components/UI/VLoader.vue";
import VHero from "@/components/VHero.vue";
import VAboutBrand from "@/components/VAboutBrand.vue";
import VProducts from "@/components/VProductsOne.vue";
import VProduct from "@/components/VProduct.vue";
import VIdeas from "@/components/VIdeas.vue";
import VSubscribe from "@/components/VSubscribe.vue";

const popularProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts();
  loading.value = false;
});
</script>

<template>
  <div>
    <VHero />
    <VAboutBrand />
    <VLoader v-if="loading" />
    <VProducts :products="popularProducts" v-else />
    <VIdeas />
    <VSubscribe />
  </div>
</template>
