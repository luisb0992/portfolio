import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import trans from './lang/config';
import RRSS from './utils/RRSS';
import Links from './utils/links';
import './assets/css/tailwind.css';
import FontAwesomeIcon from './libs/fontawesome';

const app = createApp(App);
app.provide('axios', (app.config.globalProperties.axios = axios));
app.provide('trans', trans);
app.provide('RRSS', RRSS);
app.provide('links', Links);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
