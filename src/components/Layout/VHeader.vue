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
</script>

<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-search">
        <img src="/svg/header-search.svg" alt="search" />
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
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: #ffffff;
  height: 132px;
  &-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 70px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 27px;
    &-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
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
    &:hover {
      text-decoration: underline;
    }
  }
  &-menu {
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__link {
      margin: 0 22px;
      color: var(--grey);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
