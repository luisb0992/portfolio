/**
 * link estáticos para la web
 *
 * @autor  Luis Annunziato: luisannunziato@gmail.com
 * @link https://luisan.dev
 */

import { reactive } from "vue";

interface Links {
	cv: string;
}

export default reactive<Links>({
	cv: 'https://drive.google.com/file/d/16UqBG72RKScikdxpZAax6-6sZvtete7A/view?usp=drive_link',
});
