import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";

const app = createApp(App);
app.provide("axios", (app.config.globalProperties.axios = axios));
app.mount("#app");
