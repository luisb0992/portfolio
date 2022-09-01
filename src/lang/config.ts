/**
 * Archivo de configuración para los diferentes idiomas de la pp
 *
 * @autor  Luis G. Barrios: luisbardev@gmail.com
 */

// -------------------------------
// imports
// -------------------------------
import { reactive, Ref, ref, watch } from "vue";

// ---------------------------------------------------------------
// objeto reactivo para identificar la configuración del idioma
// ---------------------------------------------------------------
export const lang = reactive({
  lang: import.meta.env.VITE_LANG,
});

// ------------------------------------------------
// objeto reactivo para almacenar las traducciones
// -------------------------------------------------
const data: Ref = ref([]);

// let trans: Function;

// watch
watch(
  () => lang.lang,
  async (newVal, oldVal) => {
    // import dinámico
    data.value = await import(/* @vite-ignore */ `./${newVal}/app`);
  }
);

// import dinámico
data.value = await import(/* @vite-ignore */ `./${lang.lang}/app`);

// función que comprueba el valor a buscar
const trans: Function = (val: string) => data.value.default[val] ?? val;

export default trans;
