import { watch, onMounted, ref, Ref, toRaw, computed, ComputedRef } from 'vue';
import proyectos from './../../API/DB/ES/es.json';
import proyects from './../../API/DB/US/us.json';
import { lang } from './../../lang/config';
import { technologies, yearsExperience } from './../../utils/functions';
import { Project, Tecnology } from '../../Types/projects/project';

export default function useProject() {
	// -------------
	const years: [] = yearsExperience('2016');
	const proyectsOrdered: Ref<Array<Project>> = ref([]);
	const showMoreProjects: Ref<boolean> = ref(false);
	const tecSelected: Ref<number | string> = ref(0);
	const yearSelected: Ref<number> = ref(0);

	// ---------
	const isThereFilter: ComputedRef = computed(() => tecSelected.value == 0 && yearSelected.value == 0);

	// --------
	watch(
		() => lang.lang,
		(newVal) => {
			loadProyects(newVal);
			showMoreOrLessProjects();
		}
	);

	// --------
	onMounted(() => {
		loadProyects(lang.lang);
		loadLimitProjects();
	});

	/**
	 * devuelve los proyectos filtrados por tecnología
	 */
	const filterTec: Function = (projects: []) => {
		return projects.filter((proyect: Project) => {
			const techs = toRaw(proyect.tecnologies);
			return techs.find((tech: Tecnology) => tech.category.toLowerCase() == tecSelected.value);
		});
	};

	/**
	 * Obtiene los proyectos originales o todos los proyectos
	 */
	const getOriginalProjects: Function = () => {
		const pES = JSON.parse(JSON.stringify(proyectos.es.proyectos));
		const pUS = JSON.parse(JSON.stringify(proyects.us.projects));
		return lang.lang === 'es' ? pES : pUS;
	};

	/**
	 * Carga los proyectos según el idioma elegido
	 */
	const loadProyects: Function = (languaje: string) => {
		const pES = JSON.parse(JSON.stringify(proyectos.es.proyectos));
		const pUS = JSON.parse(JSON.stringify(proyects.us.projects));
		proyectsOrdered.value = languaje === 'es' ? pES : pUS;
	};

	/**
	 * Filtra los proyectos por la tecnología seleccionada
	 */
	const filterForTechnologie: Function = () => {
		if (isThereFilter.value) {
			showMoreProjects.value = false;
			proyectsOrdered.value = getOriginalProjects();
			return;
		}

		// si hay un año seleccionado tomar en cuenta
		let projects = getOriginalProjects();
		if (yearSelected.value != 0) {
			projects = projects.filter((pro: Project) => parseInt(pro.year) === yearSelected.value);
		}

		// filtrar por la selección de la tecnología
		proyectsOrdered.value = tecSelected.value != 0 ? filterTec(projects) : projects;
	};

	/**
	 * Filtrar según el año seleccionado
	 */
	const filterForYear: Function = () => {
		if (isThereFilter.value) {
			showMoreProjects.value = false;
			proyectsOrdered.value = getOriginalProjects();
			return;
		}

		// si hay una tecnología seleccionada
		let projects = getOriginalProjects();
		if (tecSelected.value != 0) {
			projects = filterTec(projects);
		}

		// filtrar según la selección del año
		proyectsOrdered.value = yearSelected.value != 0 ? projects.filter((pro: Project) => parseInt(pro.year) === yearSelected.value) : projects;
	};

	/**
	 * Carga un máximo de 8 proyectos por sección
	 */
	const loadLimitProjects: Function = () => {
		const projects = getOriginalProjects();

		if (projects.length > 4) {
			showMoreProjects.value = true;
			proyectsOrdered.value.splice(8);
		}
	};

	const showMoreOrLessProjects: Function = () => {
		const projects = getOriginalProjects();

		if (showMoreProjects.value) {
			showMoreProjects.value = false;
			proyectsOrdered.value = projects;
			return;
		}

		loadLimitProjects();
	};

	return {
		proyectsOrdered,
		years,
		technologies,
		tecSelected,
		yearSelected,
		filterForTechnologie,
		filterForYear,
		showMoreProjects,
		showMoreOrLessProjects,
		isThereFilter,
	};
}
