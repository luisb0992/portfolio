/**
 * Mis redes sociales disponibles para comunicación directa
 *
 * @author Luis Barrios
 */

import { reactive } from 'vue';

interface RRSS {
	linkedin: string;
	twitter: string;
	instagram: string;
	github: string;
	whatsapp: string;
	facebook: string;
	emailOne: string;
	emailTwo: string;
	emailThree: string;
}

export default reactive<RRSS>({
	linkedin: 'https://www.linkedin.com/in/luisandev',
	twitter: 'https://twitter.com/LuisBarDev',
	instagram: 'https://www.instagram.com/luisbardev',
	github: 'https://www.github.com/luisb0992/',
	whatsapp: 'https://api.whatsapp.com/send?phone=584243270756',
	facebook: 'https://www.facebook.com/luisbardev',
	emailOne: 'luisbarrios0992@gmail.com',
	emailTwo: 'luisbardev@gmail.com',
	emailThree: 'luisandev@gmail.com',
});
