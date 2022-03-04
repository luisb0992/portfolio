/**
 * Archivo de configuración para los diferentes idiomas de la pp
 *
 * @autor  Luis G. Barrios: luisbardev@gmail.com
 */

// -------------------------------
// imports
// -------------------------------
import { reactive, Ref, ref } from "vue";

// ---------------------------------------------------------------
// objeto reactivo para identificar la configuración del idioma
// ---------------------------------------------------------------
const lang = reactive({
  lang: import.meta.env.VITE_LANG,
});

// ------------------------------------------------
// objeto reactivo para almacenar las traducciones
// -------------------------------------------------
const data: Ref = ref([]);

// -------------------------------
// import dinámico
// -------------------------------
data.value = await import(/* @vite-ignore */ `./${lang.lang}/app`);

/**
 * Buscar una palabra en el idioma actual de la app
 *
 * @param val string    palabra a buscar
 */
const trans: Function = (val: string) => data.value.default[val] ?? val;


export default trans;
