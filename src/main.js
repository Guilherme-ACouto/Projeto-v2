import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa o router
import store from './store'; // Importa o store
import './assets/global.css'; // Importa o CSS global
import '@fortawesome/fontawesome-free/css/all.css'; // Importa o CSS do Font Awesome

createApp(App)
  .use(router) // Usa o router
  .use(store)  // Usa o store
  .mount('#app'); // Monta a aplicação
    