import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa o router
import './assets/global.css'; // Importa o CSS global
import '@fortawesome/fontawesome-free/css/all.css'; // Importa o CSS do Font Awesome

createApp(App).use(router).mount('#app'); // Usa o router
