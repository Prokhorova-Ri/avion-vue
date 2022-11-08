<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
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
    <router-link :to="`/${id}`">
      <img class="product-image" :src="img" :alt="title" />
    </router-link>
    <router-link class="product-name" :to="`/${id}`">{{ title }}</router-link>
    <span class="product-price">£{{ price }}</span>
  </div>
</template>

<style lang="scss" scoped>
.product {
  &-image {
    display: block;
    margin-bottom: 24px;
    object-fit: cover;
  }
  &-name {
    display: block;
    color: var(--dark-primary);
    font-family: var(--clash);
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
    text-decoration: none;
    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  &-price {
    display: block;
    color: var(--dark-primary);
    font-size: 18px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
}
</style>
