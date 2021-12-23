<script setup lang="ts">
import { ref, useCssModule } from 'vue';
import { useCounterStore } from '/@/stores/counter';

const styles = useCssModule();
const counter = useCounterStore();
const incrementAmount = ref('2');
</script>

<template>
  <div>
    <div :class="styles.row">
      <button
        :class="styles.button"
        aria-label="Increment value"
        @click="counter.increment()"
      >
        +
      </button>
      <span :class="styles.value">{{ counter.count }}</span>
      <button
        :class="styles.button"
        aria-label="Decrement value"
        @click="counter.decrement()"
      >
        -
      </button>
    </div>
    <div :class="styles.row">
      <input
        v-model="incrementAmount"
        :class="styles.textbox"
        aria-label="Set increment amount"
      />
      <button
        :class="styles.button"
        @click="counter.incrementByAmount(Number(incrementAmount) || 0)"
      >
        Add Amount
      </button>
      <button
        :class="styles.asyncButton"
        @click="counter.incrementAsync(Number(incrementAmount) || 0)"
      >
        Add Async
      </button>
    </div>
    <div :class="styles.row">
      <span>Double Count:</span>
      <input
        :value="counter.doubleCount"
        :class="styles.longTextbox"
        disabled
      />
    </div>
  </div>
</template>

<style module>
.row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.row:not(:last-child) {
  margin-bottom: 16px;
}

.value {
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
  font-family: 'Courier New', Courier, monospace;
}

.button {
  appearance: none;
  border: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: rgb(112, 76, 182);
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgba(112, 76, 182, 0.1);
  border-radius: 2px;
  transition: all 0.15s;
}

.longTextbox {
  font-size: 32px;
  padding: 2px;
  width: 100px;
  text-align: center;
  margin-left: 20px;
}

.textbox {
  font-size: 32px;
  padding: 2px;
  width: 64px;
  text-align: center;
  margin-right: 8px;
}

.button:hover,
.button:focus {
  border: 2px solid rgba(112, 76, 182, 0.4);
}

.button:active {
  background-color: rgba(112, 76, 182, 0.2);
}

.asyncButton {
  composes: button;
  position: relative;
  margin-left: 8px;
}

.asyncButton:after {
  content: '';
  background-color: rgba(112, 76, 182, 0.15);
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  transition: width 1s linear, opacity 0.5s ease 1s;
}

.asyncButton:active:after {
  width: 0%;
  opacity: 1;
  transition: 0s;
}
</style>
