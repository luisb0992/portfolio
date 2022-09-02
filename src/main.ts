import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import trans from "./lang/config";
import RRSS from "./utils/RRSS";
import "./assets/css/tailwind.css";
// import cors from 'cors';

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faEnvelope,
  faFileLines,
  faCode,
  faCube,
  faDatabase,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faLinkedinIn,
  faEnvelope,
  faGithub,
  faWhatsapp,
  faFileLines,
  faCode,
  faCube,
  faDatabase,
  faScrewdriverWrench
);

const app = createApp(App);
app.provide("axios", (app.config.globalProperties.axios = axios));
app.provide("trans", trans);
app.provide("RRSS", RRSS);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
