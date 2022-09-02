<script setup lang="ts">
import { inject } from "vue";

const trans: any = inject("trans");
</script>
<template>
  <section
    class="text-gray-600 flex items-center justify-center py-20 md:py-0 animate-fade-in-down bg-cover md:h-screen bg-workspace-1920 px-8 md:px-0"
    id="whoiam"
  >
    <div class="container px-5 mx-auto">
      <div class="flex flex-col md:flex-row w-full gap-20 items-center">
        <div class="lg:w-1/2 w-full text-center lg:text-left">
          <h1
            class="text-4xl sm:text-7xl font-semibold mb-2 text-white items-center uppercase leading-tight"
          >
            {{ trans("iamdeveloper") }}
          </h1>
          <div class="w-100 flex justify-center lg:justify-start">
            <hr
              class="w-40 sm:w-60 border-2 border-personal-gray-2 rounded my-2"
            />
          </div>
          <div class="mb-6">
            <p class="text-gray-200 text-3xl font-medium">
              {{ trans("ing") }}
              {{ trans("fullName") }}
            </p>
          </div>
          <div class="mb-6">
            <p class="leading-loose text-gray-200 lg:text-justify font-normal">
              <span>"{{ trans("aboutMe") }}"</span>
            </p>
          </div>
          <div class="flex flex-wrap justify-center lg:justify-start">
            <a
              href="https://www.canva.com/design/DAE3z8Gaf0Y/BqofIBrei_9AXtz83ihXgA/view?utm_content=DAE3z8Gaf0Y&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
              target="_blank"
              class="inline-flex items-center focus:outline-none text-lg font-medium text-gray-200 bg-logo-dark-blue hover:bg-logo-dark-blue-200 px-4 py-3 rounded"
            >
              <font-awesome-icon icon="fa-solid fa-file-lines" class="mr-2" />
              {{ trans("downloadCV") }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
