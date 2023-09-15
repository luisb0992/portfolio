/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret, faEnvelope, faFileLines, faCode, faCube, faDatabase, faScrewdriverWrench, faCheck, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faLinkedinIn, faEnvelope, faGithub, faWhatsapp, faFileLines, faCode, faCube, faDatabase, faScrewdriverWrench, faCheck, faArrowDown);

export default FontAwesomeIcon;
