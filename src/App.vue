<script setup lang="ts">
import { ConfigProvider } from 'vant';

const themeVars = {
  sliderActiveBackgroundColor: '#704cb6',
  buttonPrimaryBorderColor: '#704cb6',
  buttonPrimaryBackgroundColor: '#704cb6',
};
</script>

<template>
  <ConfigProvider :theme-vars="themeVars">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </ConfigProvider>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 18px;
    font-size: 20px;
    &:last-child {
      margin-right: 0;
    }
    &.router-link-exact-active {
      color: #704cb6;
    }
  }
}
</style>
