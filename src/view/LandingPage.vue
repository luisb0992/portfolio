<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Skills from "./partials/Skills.vue";
import Whoiam from "./partials/Whoiam.vue";
import Project from "./partials/Project.vue";
import { inject } from "vue";

const trans: Function = inject("trans");
const RRSS: object = inject("RRSS");
</script>
<template>
  <Header />
  <main>
    <!-- quien soy -->
    <Whoiam />
    <!-- /quien soy -->

    <!-- habilidades -->
    <Skills />
    <!-- /habilidades -->

    <!-- proyectos -->
    <Project />
    <!-- proyectos -->
  </main>
  <Footer />
</template>
