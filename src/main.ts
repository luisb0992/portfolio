import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import trans from "./lang/config";
import RRSS from "./utils/RRSS";
import './assets/css/tailwind.css';
import cors from 'cors';

const app = createApp(App);
app.provide("axios", (app.config.globalProperties.axios = axios));
app.provide("trans", trans);
app.provide("RRSS", RRSS);
app.mount("#app");
