<script setup lang="ts">
import { inject } from "vue";
import useProject from "./../composables/useProject";

const {
  tecSelected,
  technologies,
  yearSelected,
  years,
  proyectsOrdered,
  isThereFilter,
  showMoreProjects,
  filterForTechnologie,
  filterForYear,
  showMoreOrLessProjects,
} = useProject();

const trans: any = inject("trans");
</script>

<template>
  <!-- <div class="bg-neutral-900 py-12 w-24 rounded-full absolute inset-x-0 -mt-10 mx-auto"></div> -->

  <section class="text-gray-600 bg-personal-dark-blue-1" id="projects">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-10">
        <p class="text-sm text-gray-200 tracking-widest font-semibold mb-1">
          {{ trans("allProjects") }}
        </p>
        <h3 class="text-4xl font-medium text-gray-200">
          {{ trans("projects") }}
        </h3>
      </div>

      <!-- filtros de búsqueda -->
      <div class="mb-4">
        <div class="flex flex-wrap flex-row items-center justify-center">
          <div class="mb-3 mr-1">
            <select
              class="appearance-none block w-auto px-3 py-1.5 text-base font-normal text-gray-200 bg-gradient-to-r from-sky-700 to-personal-gray-1 bg-clip-padding bg-no-repeat border-2 border-solid border-personal-gray-1 rounded transition ease-in-out m-0 focus:text-gray-200 focus:bg-personal-gray-1 focus:border-personal-gray-3 focus:outline-none cursor-pointer"
              @change="filterForTechnologie()"
              v-model="tecSelected"
              aria-label="Technologies"
            >
              <option value="0" selected>
                {{ trans("technologies") }}
              </option>
              <option
                :value="tec"
                v-for="(tec, index) in technologies"
                :key="index"
              >
                {{ tec }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <select
              class="appearance-none block w-auto px-3 py-1.5 text-base font-normal text-gray-200 bg-personal-gray-1 bg-clip-padding bg-no-repeat border-2 border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-200 focus:bg-personal-gray-1 focus:border-gray-600 focus:outline-none cursor-pointer"
              @change="filterForYear()"
              v-model="yearSelected"
              aria-label="Year"
            >
              <option value="0" selected>
                {{ trans("ano") }}
              </option>
              <option :value="year" v-for="year in years" :key="year">
                {{ year }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <!-- /filtros de búsqueda -->

      <!-- cards - proyectos -->
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-4 transition ease-in-out delay-150"
      >
        <div
          class="grid gap-4"
          v-for="(proyect, index) in proyectsOrdered"
          :key="index"
        >
          <div
            class="h-auto max-w-full rounded-lg bg-personal-dark-gray-blue-1 shadow-2xl flex flex-col justify-between animate-swing-in-top-fwd hover:bg-personal-dark-gray-blue-2 transition ease-in-out duration-300"
          >
            <div class="p-4">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                :src="`/assets/img/projects/${proyect.image}`"
                :alt="proyect.name"
              />
              <h2 class="text-xl text-gray-50 font-semibold mb-4">
                {{ proyect.name }}
                <span class="text-gray-100 text-sm">- {{ proyect.year }} </span>
              </h2>
              <p class="leading-relaxed text-base text-gray-100">
                {{ proyect.description }}
              </p>
              <p class="flex flex-wrap my-4 gap-2">
                <span
                  class="bg-gradient-to-r from-sky-700 to-personal-gray-1 text-gray-50 text-xs font-semibold mr-2 px-2.5 py-1 rounded"
                  v-for="(tec, index2) in proyect.tecnologies"
                  :key="index2"
                >
                  {{ tec.category }}
                </span>
              </p>
            </div>
            <div class="flex flex-row justify-between px-4 items-center">
              <div class="py-4">
                <a
                  :href="
                    proyect.repo == null || proyect.repo == '#'
                      ? 'javascript:void(0)'
                      : proyect.repo
                  "
                  class="text-gray-100 inline-flex items-center text-base font-semibold hover:text-gray-400 transition duration-200 ease-in"
                  :class="{
                    'cursor-not-allowed':
                      proyect.repo == null || proyect.repo == '#',
                  }"
                  target="_blank"
                >
                  {{ trans("visitarRepo") }}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2 mt-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="py-4">
                <a
                  :href="proyect.url"
                  class="text-gray-100 inline-flex items-center text-base font-semibold hover:text-gray-400 transition duration-200 ease-in"
                  target="_blank"
                >
                  <p>
                    {{ trans("visitarSitio") }}
                  </p>
                  <p>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2 mt-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /cards -->

      <!-- mostrar mas -->
      <div class="flex justify-center items-center py-6" v-if="isThereFilter">
        <button
          class="text-lg font-semibold text-gray-100 px-5 py-3 rounded bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in"
          @click="showMoreOrLessProjects()"
        >
          <span v-if="showMoreProjects"> {{ trans("showMore") }} </span>
          <span v-else> {{ trans("showLess") }} </span>
        </button>
      </div>
      <!-- /mostrar mas -->
    </div>
  </section>
</template>
