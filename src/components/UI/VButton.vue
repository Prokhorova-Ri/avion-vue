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
  mobileFullWidth: {
    type: Boolean,
    default: false,
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
        'btn--white': color === 'white',
        'btn--fullwidth': mobileFullWidth,
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
        'btn--white': color === 'white',
        'btn--fullwidth': mobileFullWidth,
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
  white-space: nowrap;
  cursor: pointer;
  border: none;
  @media screen and (max-width: 767px) {
    padding: 16px 12px;
    font-size: 14px;
  }
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
  &--primary {
    background: var(--dark-primary);
    color: #fff;
  }
  &--secondary {
    background: rgba(249, 249, 249, 0.15);
    color: #fff;
  }
  &--lightgrey {
    background: #f9f9f9;
    color: var(--dark-primary);
  }
  &--white {
    background: #fff;
    color: var(--dark-primary);
  }
  &--fullwidth {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
}
</style>
