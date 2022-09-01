<script setup lang="ts">
import { inject, watch, onMounted, ref, Ref, toRaw } from "vue";
import proyectos from "./../../API/DB/ES/es.json";
import proyects from "./../../API/DB/US/us.json";
import { lang } from "./../../lang/config";
import { technologies, yearsExperience } from "./../../utils/functions";

// -------------
// refs, inject
// --------------
const trans = inject("trans");
const proyectsOrdered: Ref = ref([]);
const originalProyects: Ref = ref([]);
const years: [] = yearsExperience("2016");
const tecSelected: Ref = ref(0);
const yearSelected: Ref = ref(0);

// --------
// watch
// --------
watch(
  () => lang.lang,
  (newVal) => {
    loadProyects(newVal);
  }
);

// --------
// mounted
// --------
onMounted(() => {
  loadProyects(lang.lang);
});

// -----------------------
// funciones y filtros
// -----------------------

/**
 * Carga los proyectos según el idioma elegido
 */
const loadProyects: Function = (languaje: string) => {
  // definir los proyectos a mostrar
  const pES = proyectos.es.proyectos;
  const pUS = proyects.us.projects;
  originalProyects.value = languaje === "es" ? pES : pUS;
  proyectsOrdered.value = languaje === "es" ? pES : pUS;
};

/**
 * devuelve los proyectos filtrados por tecnología
 */
const filterTec: Function = (projects: []) => {
  return projects.filter((proyect: any) => {
    const technologies = toRaw(proyect.tecnologies);
    return technologies.find((tec: any) => tec.category.toLowerCase() == tecSelected.value);
  });
};

/**
 * Filtra los proyectos por la tecnología seleccionada
 */
const filterForTechnologie: Function = () => {
  if (tecSelected.value == 0 && yearSelected.value == 0) {
    proyectsOrdered.value = originalProyects.value;
    return;
  }

  // si hay un año seleccionado tomar en cuenta
  let projects = originalProyects.value;
  if (yearSelected.value != 0) {
    projects = originalProyects.value.filter((pro: any) => pro.year == yearSelected.value);
  }

  // filtrar por la selección de la tecnología
  proyectsOrdered.value = tecSelected.value != 0 ? filterTec(projects) : projects;
};

/**
 * Filtrar según el año seleccionado
 */
const filterForYear: Function = () => {
  if (tecSelected.value == 0 && yearSelected.value == 0) {
    proyectsOrdered.value = originalProyects.value;
    return;
  }

  // si hay una tecnología seleccionada
  let projects = originalProyects.value;
  if (tecSelected.value != 0) {
    projects = filterTec(originalProyects.value);
  }

  // filtrar según la selección del año
  proyectsOrdered.value =
    yearSelected.value != 0
      ? projects.filter((pro: any) => pro.year == yearSelected.value)
      : projects;
};
</script>

<template>
  <section class="text-gray-600 bg-slate-50">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-10">
        <h4 class="text-xs text-logo-light-blue tracking-widest font-medium mb-1">
          {{ trans("allProjects") }}
        </h4>
        <h3 class="sm:text-3xl text-2xl font-medium text-logo-dark-blue">
          {{ trans("projects") }}
        </h3>
      </div>

      <!-- filtros de búsqueda -->
      <div class="mb-4">
        <div class="flex flex-wrap flex-row items-center justify-center">
          <div class="mb-3 mr-1">
            <select
              class="block w-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              @change="filterForTechnologie()"
              v-model="tecSelected"
            >
              <option value="0" selected>{{ trans("technologies") }}</option>
              <option :value="tec" v-for="tec in technologies" :key="tec">{{ tec }}</option>
            </select>
          </div>
          <div class="mb-3">
            <select
              class="block w-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              @change="filterForYear()"
              v-model="yearSelected"
            >
              <option value="0" selected>{{ trans("ano") }}</option>
              <option :value="year" v-for="year in years" :key="year">{{ year }}</option>
            </select>
          </div>
        </div>
      </div>
      <!-- /filtros de búsqueda -->

      <!-- cards - proyectos -->
      <div class="flex flex-wrap items-stretch transition ease-in-out delay-150">
        <div class="xl:w-1/4 md:w-1/2 p-2 animate-fade-in-down" v-for="(proyect, index) in proyectsOrdered" :key="index">
          <div class="rounded-lg bg-white shadow-md h-full flex flex-col justify-between">
            <div class="p-4">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                :src="`./../../../src/assets/Img/projects/${proyect.image}`"
                alt="content"
              />
              <h2 class="text-lg text-logo-dark-blue font-medium mb-4">
                {{ proyect.name }}
                <span class="text-gray-400 text-sm">- {{ proyect.year }} </span>
              </h2>
              <p class="leading-relaxed text-base text-gray-400">
                {{ proyect.description }}
              </p>
              <p class="flex flex-wrap my-4 gap-2">
                <span
                  class="bg-red-100 text-red-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                  v-for="(tec, index2) in proyect.tecnologies"
                  :key="index2"
                >
                  {{ tec.category }}
                </span>
              </p>
            </div>
            <div class="flex flex-row justify-between px-4 border">
              <div class="py-4">
                <a
                  :href="proyect.url"
                  class="text-logo-dark-blue inline-flex items-center text-sm hover:text-logo-dark-blue-500"
                  target="_blank"
                >
                  {{ trans("visitarSitio") }}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="py-4">
                <a
                  :href="proyect.repo ?? '#'"
                  class="text-logo-light-blue inline-flex items-center text-sm hover:text-logo-light-blue-500"
                  target="_blank"
                >
                  {{ trans("visitarRepo") }}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /cards -->
    </div>
  </section>
</template>
