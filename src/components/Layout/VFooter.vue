<script setup>
import VSubscribeForm from "@/components/VSubscribeForm.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-menu">
          <div class="footer-menu-column">
            <span class="footer-menu-title">Menu</span>
            <router-link class="footer-menu__link" to="/"
              >New arrivals</router-link
            >
            <router-link class="footer-menu__link" to="/"
              >Best sellers</router-link
            >
            <router-link class="footer-menu__link" to="/"
              >Recently viewed</router-link
            >
            <router-link class="footer-menu__link" to="/"
              >Popular this week</router-link
            >
            <router-link class="footer-menu__link" to="/"
              >All products</router-link
            >
          </div>
          <div class="footer-menu-column">
            <span class="footer-menu-title">Categories</span>
            <router-link class="footer-menu__link" to="/">Crockery</router-link>
            <router-link class="footer-menu__link" to="/"
              >Furniture</router-link
            >
            <router-link class="footer-menu__link" to="/">Homeware</router-link>
            <router-link class="footer-menu__link" to="/"
              >Plant pots</router-link
            >
            <router-link class="footer-menu__link" to="/">Chairs</router-link>
            <router-link class="footer-menu__link" to="/">Crockery</router-link>
          </div>
          <div class="footer-menu-column">
            <span class="footer-menu-title">Our company</span>
            <router-link class="footer-menu__link" to="/">About us</router-link>
            <router-link class="footer-menu__link" to="/"
              >Vacancies</router-link
            >
            <router-link class="footer-menu__link" to="/"
              >Contact us</router-link
            >
            <router-link class="footer-menu__link" to="/">Privacy</router-link>
            <router-link class="footer-menu__link" to="/"
              >Returns policy</router-link
            >
          </div>
        </div>
        <div class="footer-subscribe">
          <span class="footer-menu-title">Join our mailing list</span>
          <VSubscribeForm
            colorButton="white"
            bgInput="rgba(255, 255, 255, 0.15)"
            colorText="#fff"
          />
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-bottom-copyright">Copyright 2022 Avion LTD</span>
        <div class="footer-bottom-social">
          <a class="footer-bottom-social__link" href="#">
            <img src="/svg/linkedin.svg" alt="#" />
          </a>
          <a class="footer-bottom-social__link" href="#">
            <img src="/svg/facebook.svg" alt="#" />
          </a>
          <a class="footer-bottom-social__link" href="#">
            <img src="/svg/instagram.svg" alt="#" />
          </a>
          <a class="footer-bottom-social__link" href="#">
            <img src="/svg/skype.svg" alt="#" />
          </a>
          <a class="footer-bottom-social__link" href="#">
            <img src="/svg/twitter.svg" alt="#" />
          </a>
          <a class="footer-bottom-social__link" href="#">
            <img src="/svg/pinterest.svg" alt="#" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--dark-primary);
  color: #fff;
  @media screen and (max-width: 767px) {
    margin: 0 -24px;
  }
  &-content {
    padding: 55px 80px 20px 80px;
    @media screen and (max-width: 1024px) {
      padding: 50px 30px 30px 50px;
    }
    @media screen and (max-width: 767px) {
      padding: 40px 25px;
    }
  }
  &-top {
    display: grid;
    grid-template-columns: 540px 1fr;
    column-gap: 110px;
    border-bottom: 1px solid #4e4d93;
    @media screen and (max-width: 1150px) {
      column-gap: 10px;
      grid-template-columns: 450px 1fr;
    }
    @media screen and (max-width: 1024px) {
      column-gap: 10px;
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      padding-bottom: 24px;
    }
  }
  &-menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    &-title {
      font-family: var(--clash);
      display: block;
      margin-bottom: 12px;
    }
    &__link {
      display: block;
      color: #fff;
      font-size: 14px;
      line-height: 19px;
      text-decoration: none;
      margin-bottom: 12px;
      &:last-child {
        margin-bottom: 48px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &-bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 22px;
    @media screen and (max-width: 767px) {
      display: block;
      text-align: center;
    }
    &-copyright {
      font-size: 14px;
      @media screen and (max-width: 767px) {
        display: block;
        margin-bottom: 20px;
      }
    }
    &-social {
      display: flex;
      align-items: center;
      &__link {
        margin-left: 24px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
