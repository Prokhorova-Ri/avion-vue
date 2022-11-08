<script setup>
import { ref } from "vue";

const menu = [
  {
    name: "Plant pots",
    path: "/planet",
  },
  {
    name: "Ceramics",
    path: "/ceramics",
  },
  {
    name: "Tables",
    path: "/tables",
  },
  {
    name: "Chairs",
    path: "/chairs",
  },
  {
    name: "Crockery",
    path: "/crockery",
  },
  {
    name: "Tableware",
    path: "/tableware",
  },
  {
    name: "Cutlery",
    path: "/cutlery",
  },
];

const isOpenedMobileNenu = ref(false);
</script>

<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-left">
        <div class="header-top-search">
          <img
            class="header-top__icon"
            src="/svg/header-search.svg"
            alt="search"
          />
        </div>
        <div
          class="header-top-mobile-menu"
          @click="isOpenedMobileNenu = !isOpenedMobileNenu"
        >
          <img class="header-top__icon" src="/svg/menu.svg" alt="menu" />
        </div>
      </div>

      <router-link class="header-logo" to="/">Avion</router-link>
      <div class="header-top-right">
        <div class="header-top-right__cart">
          <router-link to="/cart">
            <img src="/svg/header-cart.svg" alt="cart" />
          </router-link>
        </div>
        <div class="header-top-right__user">
          <router-link to="/user">
            <img src="/svg/header-user.svg" alt="user" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <router-link
        class="header-menu__link"
        :to="element.path"
        v-for="(element, i) of menu"
        :key="i"
        >{{ element.name }}</router-link
      >
    </div>
    <div class="header-menu-mobile" v-if="isOpenedMobileNenu">
      <router-link
        class="header-menu-mobile__link"
        :to="element.path"
        v-for="(element, i) of menu"
        :key="i"
        >{{ element.name }}</router-link
      >
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: #ffffff;
  height: 132px;
  position: relative;
  @media screen and (max-width: 767px) {
    height: auto;
  }
  &-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 70px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 27px;
    @media screen and (max-width: 767px) {
      margin: 0;
      border: none;
      height: auto;
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
    }
    &__icon {
      display: block;
    }
    &-left {
      display: flex;
      align-items: center;
      @media screen and (max-width: 767px) {
        order: 2;
      }
    }
    &-mobile-menu {
      margin-left: 16px;
      display: none;
      @media screen and (max-width: 767px) {
        display: block;
      }
    }
    &-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @media screen and (max-width: 767px) {
        display: none;
      }
      &__cart {
        margin-right: 16px;
      }
    }
  }
  &-logo {
    color: var(--black);
    font-family: var(--clash);
    font-size: 24px;
    text-decoration: none;
    text-align: center;
    @media screen and (max-width: 767px) {
      order: 1;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  &-menu {
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
      display: none;
    }
    &__link {
      margin: 0 22px;
      color: var(--grey);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    &-mobile {
      position: fixed;
      background: #fff;
      top: 50px;
      right: 0;
      padding: 40px 24px;
      width: 200px;
      box-shadow: -10px 10px 10px rgb(131, 131, 131);
      &-top {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 24px;
      }
      &__link {
        display: block;
        text-align: center;
        margin: 0 22px;
        margin-bottom: 20px;
        color: var(--grey);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
