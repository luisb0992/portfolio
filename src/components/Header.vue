<script setup lang="ts">
import { inject, Ref, ref } from "vue";
import Logo from "/src/components/Logo.vue";
import { lang } from "./../lang/config";

const trans = inject("trans");
const RRSS = inject("RRSS");
const es: Ref = ref(true);

const changeLanguaje: Function = () => {
  if (es.value) {
    es.value = false;
    return (lang.lang = "us");
  }

  es.value = true;
  lang.lang = "es";
};

const toScroll: Function = (id: string) => {
  const section = document.getElementById(id);
  const position = section ? section.getBoundingClientRect() : { top: 0 };
  window.scrollTo({ top: position.top, behavior: "smooth" });
};
</script>

<template>
  <div class="bg-personal-gray-1">
    <header>
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-200"
      >
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a class="mr-5 hover:text-gray-300" href="javascript:void(0)" @click="toScroll('home')">{{
            trans("home")
          }}</a>
          <a class="mr-5 hover:text-gray-300" href="javascript:void(0)" @click="toScroll('whoiam')">
            {{ trans("whoiam") }}
          </a>
          <a class="mr-5 hover:text-gray-300" href="javascript:void(0)" @click="toScroll('skills')">
            {{ trans("skills") }}
          </a>
          <a class="hover:text-gray-300" href="javascript:void(0)" @click="toScroll('projects')">
            {{ trans("projects") }}
          </a>
        </nav>
        <a
          class="flex order-first lg:order-none lg:w-1/5 font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <Logo
            classes="w-16 h-16 bg-gray-200 rounded-full"
            src="/src/assets/Img/ISOTIPO-ORIGINAL-TRANSPARENTE.webp"
          />
        </a>

        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <a
            :href="RRSS.linkedin"
            target="_blank"
            class="inline-flex items-center focus:outline-none text-base bg-personal-gray-2 text-white hover:bg-gray-700 px-3 py-1 mt-4 md:mt-0"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </a>
          <a
            :href="RRSS.github"
            target="_blank"
            class="inline-flex items-center focus:outline-none text-base bg-personal-gray-2 text-white hover:bg-gray-700 px-3 py-1 mt-4 md:mt-0"
          >
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>
          <a
            :href="'mailto:' + RRSS.emailOne"
            target="_blank"
            class="inline-flex items-center focus:outline-none text-base bg-personal-gray-2 text-white hover:bg-gray-700 px-3 py-1 mt-4 md:mt-0"
          >
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </a>
          <a
            :href="RRSS.whatsapp"
            target="_blank"
            class="inline-flex items-center focus:outline-none text-base bg-personal-gray-2 text-white hover:bg-gray-700 px-3 py-1 mt-4 md:mt-0"
          >
            <font-awesome-icon icon="fa-brands fa-whatsapp" />
          </a>
          <div class="border-r px-1 mr-2 border-gray-600 mt-4 md:mt-0"></div>
          <button
            class="inline-flex items-center bg-personal-gray-2 border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0"
            :class="es ? 'bg-gray-600 text-white hover:bg-gray-700' : ''"
            @click="changeLanguaje()"
            :disabled="es"
          >
            <span> {{ trans("spanish") }} </span>
          </button>
          <button
            class="inline-flex items-center bg-personal-gray-2 border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0"
            :class="!es ? 'bg-gray-600 text-white hover:bg-gray-700' : ''"
            @click="changeLanguaje()"
            :disabled="!es"
          >
            <span> {{ trans("english") }} </span>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>
