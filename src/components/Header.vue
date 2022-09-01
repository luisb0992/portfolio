<script setup lang="ts">
import { inject, Ref, ref } from "vue";
import Logo from "/src/components/Logo.vue";
import { lang } from "./../lang/config";

const trans = inject("trans");
const es: Ref = ref(true);

const changeLanguaje: Function = () => {
  if (es.value) {
    es.value = false;
    return (lang.lang = "us");
  }

  es.value = true;
  lang.lang = "es";
};
</script>

<template>
  <header class="text-gray-600 body-fon">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a class="mr-5 hover:text-gray-900">{{ trans("home") }}</a>
        <a class="mr-5 hover:text-gray-900"> {{ trans("whoiam") }} </a>
        <a class="mr-5 hover:text-gray-900">{{ trans("skills") }}</a>
        <a class="hover:text-gray-900">{{ trans("projects") }}</a>
      </nav>
      <a
        class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
      >
        <Logo classes="w-20 h-20" src="/src/assets/Img/ISOTIPO-ORIGINAL-TRANSPARENTE.webp" />
      </a>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <button
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0"
          :class="es ? 'bg-logo-dark-blue text-white hover:bg-gray-700' : ''"
          @click="changeLanguaje()"
        >
          <span> {{ trans("spanish") }} </span>
        </button>
        <button
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0"
          :class="!es ? 'bg-logo-dark-blue text-white hover:bg-gray-700' : ''"
          @click="changeLanguaje()"
        >
          <span> {{ trans("english") }} </span>
        </button>
      </div>
    </div>
  </header>
</template>
