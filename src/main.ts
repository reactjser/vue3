import { createApp } from 'vue';
import { ElButton } from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss';
import App from './App.vue';
import router from './router';
import { store, key } from './store';

const app = createApp(App);

app.use(ElButton);

app.use(store, key);
app.use(router);
app.mount('#app');
