<script setup>
import VButton from "@/components/UI/VButton.vue";
const props = defineProps({
  bgInput: {
    type: String,
    required: false,
  },
  colorButton: {
    type: String,
    required: false,
  },
  colorText: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <form class="subscribe-form">
    <input
      class="input-text subscribe-form__input"
      type="text"
      placeholder="your@email.com"
      :style="{ backgroundColor: bgInput, color: colorText }"
    />
    <VButton :color="colorButton || 'primary'">Sign up</VButton>
  </form>
</template>

<style lang="scss">
.subscribe-form {
  display: flex;
  &__input {
    flex-grow: 1;
  }
}
</style>
