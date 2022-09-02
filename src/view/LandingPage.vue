<script setup lang="ts">
import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";
import Skills from "/src/view/partials/Skills.vue";
import Whoiam from "/src/view/partials/Whoiam.vue";
import Project from "/src/view/partials/Project.vue";
</script>
<template>
  <!-- cabecera -->
  <Header />
  <!-- /cabecera -->

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

  <!-- pie -->
  <Footer />
  <!-- /pie -->
</template>
