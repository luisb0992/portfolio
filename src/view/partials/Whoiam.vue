<script setup lang="ts">
import { inject } from "vue";

const links: any = inject("links");
const RRSS: any = inject("RRSS");
const trans: any = inject("trans");
</script>
<template>
  <section
    class="flex items-center justify-center py-20 md:py-0 bg-personal-dark-blue-1 md:h-screen px-8 md:px-0 relative"
    id="whoiam"
  >
    <div
      class="absolute top-0 -mt-40 sm:-mt-64 gdend py-40 w-full sm:w-1/3 opacity-60"
    >
      &nbsp;
    </div>
    <div class="container md:px-5 mx-auto">
      <div class="flex flex-col md:flex-row w-full gap-20 items-center">
        <div class="max-w-7xl mx-auto">
          <h1
            class="text-center text-4xl sm:text-7xl lg:text-9xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 from-40% to-personal-gray-1 font-bold leading-tight uppercase"
          >
            {{ trans("ing") }}
            {{ trans("fullName") }}
          </h1>
          <article class="mt-5">
            <p
              class="text-2xl text-center font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 from-40% to-personal-gray-1"
            >
              {{ trans("iamdeveloper") }}
            </p>
          </article>
          <article class="mt-5 max-w-6xl mx-auto">
            <p
              class="leading-normal text-gray-400 text-center font-normal text-xl"
            >
              <span>{{ trans("aboutMe") }}</span>
            </p>
          </article>
          <article
            class="flex justify-center mt-7 gap-2 flex-col md:flex-row animate-fade-in-down"
          >
            <a
              :href="links.cv"
              target="_blank"
              aria-label="Download cv"
              class="px-5 py-3 rounded transition-all duration-300 inline-flex items-center focus:outline-none font-semibold text-gray-100 text-lg bg-sky-600 hover:bg-sky-700 gap-2 justify-center"
            >
              <font-awesome-icon icon="fa-solid fa-file-lines" />
              {{ trans("downloadCV") }}
            </a>
            <a
              :href="RRSS.linkedin"
              target="_blank"
              aria-label="Linkedin Account"
              class="px-5 py-3 rounded transition-all duration-300 inline-flex items-center focus:outline-none text-lg font-medium text-gray-200 bg-personal-dark-gray-blue-1 shadow-2xl hover:bg-gray-700 gap-2 justify-center"
            >
              <font-awesome-icon icon="fa-brands fa-linkedin-in" />
              Linkedin
            </a>
            <a
              :href="RRSS.github"
              target="_blank"
              aria-label="Github Account"
              class="px-5 py-3 rounded transition-all duration-300 inline-flex items-center focus:outline-none text-lg font-medium text-gray-200 bg-personal-dark-gray-blue-1 shadow-2xl hover:bg-gray-700 gap-2 justify-center"
            >
              <font-awesome-icon icon="fa-brands fa-github" />
              GitHub
            </a>
          </article>
          <article class="flex justify-center mt-7">
            <font-awesome-icon
              icon="fa-solid fa-arrow-down motion-safe:animate-bounce"
              class="text-gray-400"
            />
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
