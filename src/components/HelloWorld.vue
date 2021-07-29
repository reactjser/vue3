<script setup lang="ts">
import { defineProps } from 'vue';
import { useVueStore } from '../store';

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const store = useVueStore();
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>
    {{ store.state.counter.count }}
  </h2>
  <div class="button-wrapper">
    <a-button type="primary" @click="store.commit('counter/increment', 1)">
      同步加1
    </a-button>
    <a-button
      type="primary"
      @click="store.dispatch('counter/incrementAsync', 1)"
    >
      异步加1
    </a-button>
  </div>
</template>
