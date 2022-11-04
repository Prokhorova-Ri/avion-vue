<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="product">
    <router-link to="/">
      <img class="product-image" :src="img" :alt="title" />
    </router-link>
    <router-link class="product-name" to="/">{{ title }}</router-link>
    <span class="product-price">£{{ price }}</span>
  </div>
</template>

<style lang="scss" scoped>
.product {
  &-image {
    display: block;
    margin-bottom: 24px;
  }
  &-name {
    display: block;
    color: var(--dark-primary);
    font-family: var(--clash);
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  &-price {
    display: block;
    color: var(--dark-primary);
    font-size: 18px;
  }
}
</style>
