import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import trans from "./lang/config";
import './assets/css/tailwind.css';

const app = createApp(App);
app.provide("axios", (app.config.globalProperties.axios = axios));
app.provide('trans', trans);
app.mount("#app");
