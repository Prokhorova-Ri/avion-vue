<script setup>
import { ref } from "vue";
import VProduct from "@/components/VProduct.vue";
import VButton from "@/components/UI/VButton.vue";

const props = defineProps({
  products: {
    required: true,
  },
});
</script>

<template>
  <div class="products-container">
    <div class="products">
      <VProduct
        v-for="product of products"
        :id="product.id"
        :key="product.id"
        :img="product.img"
        :title="product.title"
        :price="product.price"
      />
    </div>
    <div class="products-link">
      <VButton
        :mobileFullWidth="true"
        class="products-link"
        :color="lightgrey"
        type="link"
        to="/"
        >View collection</VButton
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products {
  padding: 0 80px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-bottom: 64px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media screen and (max-width: 767px) {
    padding: 0;
  }
  &-container {
    margin-bottom: 56px;
  }
  &-link {
    display: flex;
    margin: 0 auto;
    width: 170px;
    background: var(--light-grey);
    line-height: 1.5;
    color: var(--dark-primary);
    text-decoration: none;
    cursor: pointer;
    @media screen and (max-width: 767px) {
      width: auto;
    }
    &:hover {
      text-decoration: underline;
      background: #ebe9e9;
    }
  }
}
</style>
