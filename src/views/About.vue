<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from 'ant-design-vue';
import type { Dayjs } from 'dayjs';

const currentDate = ref<Dayjs>();
</script>

<template>
  <div>
    <DatePicker v-model:value="currentDate" />
  </div>
</template>
