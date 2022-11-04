<script setup>
const props = defineProps({
  background: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    default: "button",
  },
  to: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    default: "primary",
  },
});
</script>

<template>
  <button
    v-if="type === 'button'"
    :class="[
      'btn',
      {
        'btn--primary': color === 'primary',
        'btn--secondary': color === 'secondary',
        'btn--lightgrey': color === 'lightgrey',
      },
    ]"
  >
    <slot />
  </button>
  <router-link
    v-else
    :to="to"
    :class="[
      'btn',
      {
        'btn--primary': color === 'primary',
        'btn--secondary': color === 'secondary',
        'btn--lightgrey': color === 'lightgrey',
      },
    ]"
  >
    <slot />
  </router-link>
</template>

<style lang="scss" scoped>
.btn {
  background: var(--dark-primary);
  color: #fff;
  display: inline-flex;
  padding: 16px 32px;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.8;
  }
  &--primary {
    background: var(--dark-primary);
    color: #fff;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      background: #ebe9e9;
    }
  }
  &--secondary {
    background: rgba(249, 249, 249, 0.15);
    color: #fff;
    cursor: pointer;
  }
  &--lightgrey {
    background: #f9f9f9;
    color: #2a254b;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      background: #ebe9e9;
    }
  }
}
</style>
