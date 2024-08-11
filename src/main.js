import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa o router
import './assets/global.css'; // Importa o CSS global

createApp(App).use(router).mount('#app'); // Usa o router
