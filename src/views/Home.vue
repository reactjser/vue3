<script setup lang="ts">
import HelloWorld from '/@/components/HelloWorld.vue';
</script>

<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<style lang="scss">
.home {
  .button-wrapper {
    button {
      margin-right: 20px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
