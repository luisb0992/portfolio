/**
 * Configuration for the API.
 */

import { reactive } from "vue";

/**
 * The configuration for the API.
 */
const API = reactive({

  // The Real-time Firebase database
  RTDB: {

    // URL.
    url: import.meta.env.VITE_DB_URL
  }
});

export default API;