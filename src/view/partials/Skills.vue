<script setup lang="ts">
import { inject } from "vue";

const trans: Function = inject("trans");
</script>

<template>
  <section class="bg-gradient-to-t from-personal-brown-1 to-[#2b262a]" id="skills">
    <div class="container px-5 py-24 mx-auto">
      <!-- header -->
      <div class="flex flex-col text-center w-full mb-10">
        <h2 class="text-sm text-gray-300 tracking-widest font-semibold mb-1">
          {{ trans("allExperience") }}
        </h2>
        <h2 class="text-4xl font-medium text-gray-200">
          {{ trans("skills") }}
        </h2>
      </div>
      <!-- /header -->

      <!-- contenido -->
      <div class="flex flex-wrap">
        <!-- frontend -->
        <div
          class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500"
        >
          <div class="flex rounded-lg h-full p-8 flex-col bg-personal-brown-1 shadow-2xl">
            <div class="flex items-center mb-3 -ml-3">
              <div
                class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-logo-dark-blue text-white flex-shrink-0"
              >
                <i class="fas fa-code"></i>
              </div>
              <h3 class="text-gray-200 text-lg font-medium">
                {{ trans("frontend") }}
              </h3>
            </div>
            <div class="flex-grow text-gray-200">
              <div class="flex flex-col items-start text-left space-y-2 leading-relaxed text-base">
                <a>
                  <span
                    class="bg-gray-200 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("html") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("css") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("javascript") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("typescript") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("sass") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("npm") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("webpack") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("vite") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("vuejs") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("reactjs") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("angularjs") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("bootstrap") }}</span
                  >, <span>{{ trans("tailwind") }}</span
                  >, <span>{{ trans("materialize") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("pwa") }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- backend -->
        <div
          class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500"
        >
          <div class="flex rounded-lg h-full p-8 flex-col bg-personal-brown-1 shadow-2xl">
            <div class="flex items-center mb-3 -ml-3">
              <div
                class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-logo-dark-blue text-white flex-shrink-0 font-extrabold"
              >
                <i class="fa-solid fa-cube"></i>
              </div>
              <h2 class="text-gray-200 text-lg font-medium">
                {{ trans("backend") }}
              </h2>
            </div>
            <div class="flex-grow text-gray-200">
              <div class="flex flex-col items-start text-left space-y-2 leading-relaxed text-base">
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("php") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("nodejs") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("api") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("rest") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("laravel") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("express") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("caching") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("ssr") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("https") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("ssl") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("cors") }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Base de datos -->
        <div
          class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500"
        >
          <div class="flex rounded-lg h-full p-8 flex-col bg-personal-brown-1 shadow-2xl">
            <div class="flex items-center mb-3 -ml-3">
              <div
                class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-logo-dark-blue text-white flex-shrink-0"
              >
                <i class="fas fa-database"></i>
              </div>
              <h2 class="text-gray-200 text-lg font-medium">
                {{ trans("database") }}
              </h2>
            </div>
            <div class="flex-grow text-gray-200">
              <div class="flex flex-col items-start text-left space-y-2 leading-relaxed text-base">
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("mysql") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("mariadb") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("postgresql") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("mssql") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("mongodb") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("firebase") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("indexdb") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("orm") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("transaction") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("db_normalization") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("authentication") }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- herramientas -->
        <div
          class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500"
        >
          <div class="flex rounded-lg h-full p-8 flex-col bg-personal-brown-1 shadow-2xl">
            <div class="flex items-center mb-3 -ml-3">
              <div
                class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-logo-dark-blue text-white flex-shrink-0"
              >
                <i class="fa-solid fa-screwdriver-wrench"></i>
              </div>
              <h2 class="text-gray-200 text-lg title-font font-medium">
                {{ trans("tools") }}
              </h2>
            </div>
            <div class="flex-grow text-gray-200">
              <div class="flex flex-col items-start text-left space-y-2 leading-relaxed text-base">
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("github") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("gitlab") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("bitbucket") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("git") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("unittest") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("solid") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("websocket") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("apache") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>
                    {{ trans("docker") }}
                  </span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("jest") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("cypress") }}</span>
                </a>
                <a>
                  <span
                    class="bg-gray-100 text-logo-light-blue w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center"
                  >
                    <i class="fas fa-check text-xs"></i>
                  </span>
                  <span>{{ trans("electron") }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /contenido -->
    </div>
  </section>
</template>
