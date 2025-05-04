import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css';

import App from './App.vue';
import router from './router';
import Toast, { POSITION } from 'vue-toastification';

// Импортируем FormKit
import { plugin, defaultConfig } from '@formkit/vue';
import '@formkit/themes/genesis'; // Импортируйте тему по умолчанию (или другую тему)


import './assets/styles/reset.css';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

app.component('VueGoodTable', VueGoodTable);

app.use(router);
app.use(createPinia());
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
});

// Подключаем FormKit
app.use(plugin, defaultConfig);

app.mount('#app');
