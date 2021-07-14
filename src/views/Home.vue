<template>
    <div class="home">
        <p>{{ store.state.counter.count }}</p>
        <div class="button-wrapper">
            <el-button
                size="small"
                @click="store.commit('counter/increment', 1)"
            >
                同步加1
            </el-button>
            <el-button
                size="small"
                @click="store.dispatch('counter/incrementAsync', 1)"
            >
                异步加1
            </el-button>
        </div>
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useVueStore } from '../store';
import HelloWorld from '/@/components/HelloWorld.vue';

export default defineComponent({
    name: 'Home',
    components: {
        HelloWorld,
    },
    setup() {
        const store = useVueStore();

        return {
            store,
        };
    },
});
</script>

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
