<script setup lang="ts">
	import Footer from '/src/components/Footer.vue';
	import Header from '/src/components/Header.vue';
	import Project from '/src/view/partials/Project.vue';
	import Skills from '/src/view/partials/Skills.vue';
	import Whoiam from '/src/view/partials/Whoiam.vue';
</script>
<template>
	<!-- cabecera -->
	<Header />
	<!-- /cabecera -->

	<main>
		<!-- quien soy -->
		<Whoiam />
		<!-- /quien soy -->

		<!-- proyectos -->
		<Project />
		<!-- proyectos -->

		<!-- habilidades -->
		<Skills />
		<!-- /habilidades -->
	</main>

	<!-- pie -->
	<Footer />
	<!-- /pie -->
</template>
