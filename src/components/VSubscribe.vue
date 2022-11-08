<script setup>
import VSubscribeForm from "@/components/VSubscribeForm.vue";
</script>

<template>
  <div class="subscribe">
    <div class="subscribe-content">
      <h3 class="subscribe-title">Join the club and get the benefits</h3>
      <h4 class="subscribe-description">
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </h4>
      <div class="subscribe-checks">
        <div class="subscribe-check">
          <img class="subscribe-check__icon" src="/svg/check.svg" alt="check" />
          <span class="subscribe-check__name">Exclusive offers</span>
        </div>
        <div class="subscribe-check">
          <img class="subscribe-check__icon" src="/svg/check.svg" alt="check" />
          <span class="subscribe-check__name">Free events</span>
        </div>
        <div class="subscribe-check">
          <img class="subscribe-check__icon" src="/svg/check.svg" alt="check" />
          <span class="subscribe-check__name">Large discounts</span>
        </div>
      </div>
      <VSubscribeForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subscribe {
  background: url("/img/email-image.jpg");
  background-size: cover;
  padding: 97px 0 86px 0;
  @media screen and (max-width: 767px) {
    background-image: url("/img/email-mobile.jpg");
    background-size: cover;
    padding: 24px;
    margin: 0 -24px;
  }
  &-content {
    max-width: 495px;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    @media screen and (max-width: 767px) {
      text-align: left;
    }
  }
  &-title {
    display: block;
    font-family: var(--clash);
    font-size: 32px;
    line-height: 1.4;
    margin: 0 0 12px 0;
    @media screen and (max-width: 767px) {
      font-size: 24px;
    }
  }
  &-description {
    display: block;
    font-family: var(--satoshi);
    font-size: 18px;
    line-height: 1.5;
    margin: 0 0 30px 0;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
  &-checks {
    display: flex;
    justify-content: center;
    margin: 0 0 40px 0;
    @media screen and (max-width: 767px) {
      display: block;
    }
  }
  &-check {
    display: flex;
    align-items: center;
    margin: 0 36px 0 0;
    @media screen and (max-width: 767px) {
      margin: 0;
      margin-bottom: 8px;
    }
    &__icon {
      margin: 0 8px 0 0;
    }
  }
}
</style>
