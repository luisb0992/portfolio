/**
 * Archivo de configuración para los diferentes idiomas de la pp
 *
 * @autor  Luis Annunziato: luisannunziato@gmail.com
 * @link https://luisan.dev
 */

// -------------------------------
// imports
// -------------------------------
import { reactive, Ref, ref, watch } from 'vue';
import { Lang, Trans } from './../Types/lang/config';
import localeES from './es/app';
import localeUS from './us/app';

// ---------------------------------------------------------------
// objeto reactivo para identificar la configuración del idioma
// ---------------------------------------------------------------
export const lang: Lang = reactive({
	lang: import.meta.env.VITE_LANG,
});

// ------------------------------------------------
// objeto reactivo para almacenar las traducciones
// -------------------------------------------------
const data: Ref = ref([]);
data.value = localeES;

// watch
watch(
	() => lang.lang,
	async (newVal, oldVal) => {
		if (newVal == 'es') {
			data.value = localeES;
		} else {
			data.value = localeUS;
		}
	}
);

/**
 * Función translate de la app
 */
const trans: Trans = reactive({
	locale: (val: string) => {
		return data.value[val] ?? val;
	},
});

// exportar la función trans.locale
export default trans.locale;
