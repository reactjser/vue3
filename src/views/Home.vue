<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Counter from '/@/components/Counter.vue';
import PiniaLogo from '/@/components/PiniaLogo.vue';
</script>

<template>
  <div class="Home">
    <header className="Home-header">
      <PiniaLogo class="Home-logo" />
      <Counter />
    </header>
  </div>
</template>

<style lang="scss">
.Home {
  text-align: center;
}

.Home-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .Home-logo {
    animation: Home-logo-float infinite 3s ease-in-out;
  }
}

.Home-header {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}

.Home-link {
  color: rgb(112, 76, 182);
}

@keyframes Home-logo-float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
