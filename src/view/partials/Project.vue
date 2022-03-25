<script setup lang="ts">
import { inject } from "vue";
import API from "././../../API/config";
import proyectos from "./../../API/DB/ES/es.json";
import proyects from "./../../API/DB/US/us.json";

const trans: Function = inject("trans");
// const axios: Function = inject("axios");
// const endpoint: string = "https://portfolio-84fa0-default-rtdb.firebaseio.com/es/proyectos";

// const headers = {
//   "Content-Type": "application/x-www-form-urlencoded",
// };
// axios({
//   method: "get",
//   url: endpoint,
//   headers,
// }).then((res) => console.log(res));

// fetch(endpoint).then((res) => console.log(res));

// const res = await fetch(endpoint);
// const data = await res.json();

// definir los proyectos a mostrar
const DBProyects =
  import.meta.env.VITE_LANG === "es" ? proyectos.es.proyectos : proyects.us.proyects;

// ordenar los proyectos por fecha
const proyectsOrdered = DBProyects.sort((a, b) => new Date(b.year) - new Date(a.year));
</script>
<template>
  <section class="text-gray-600 bg-slate-50">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-10">
        <h2 class="text-xs text-logo-light-blue tracking-widest font-medium mb-1">
          {{ trans("allProjects") }}
        </h2>
        <h2 class="sm:text-3xl text-2xl font-medium text-logo-dark-blue">
          {{ trans("projects") }}
        </h2>
      </div>

      <!-- filtros de búsqueda -->
      <div class="text-gray-600 bg-white mb-4 xl:w-[99%]">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav
            class="flex flex-wrap items-center text-base justify-center"
          >
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">First Link</a>
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">Second Link</a>
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">Third Link</a>
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">Fourth Link</a>
          </nav>
        </div>
      </div>
      <!-- /filtros de búsqueda -->

      <!-- cards -->
      <div class="flex flex-wrap items-stretch gap-4">
        <div
          class="xl:w-[24%] md:w-[48%] rounded-lg bg-white shadow-md overflow-hidden"
          v-for="(proyect, index) in proyectsOrdered"
          :key="index"
        >
          <div class="p-6">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              :src="`./../../../src/assets/Img/projects/${proyect.image}`"
              alt="content"
            />
            <h2 class="text-lg text-logo-dark-blue font-medium mb-4">
              {{ proyect.name }}
              <span class="text-gray-400 text-sm">- {{ proyect.year }} </span>
            </h2>
            <!-- <p class="flex flex-wrap mb-4 gap-2">
              <span
                class="bg-blue-100 text-logo-light-blue text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                v-for="(tag, index2) in proyect.tags"
                :key="index2"
              >
                {{ tag }}
              </span>
            </p> -->
            <p class="leading-relaxed text-base text-gray-400">
              {{ proyect.description }}
            </p>
            <p class="flex flex-wrap my-4 gap-2">
              <span
                class="bg-red-100 text-red-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                v-for="(tecnologie, index2) in proyect.tecnologies"
                :key="index2"
              >
                {{ tecnologie.category }}
              </span>
            </p>
            <hr />
            <p class="my-2">
              <a
                :href="proyect.url ?? '#'"
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
            </p>
            <p class="my-2">
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
            </p>
          </div>
        </div>
      </div>
      <!-- /cards -->
    </div>
  </section>
</template>
