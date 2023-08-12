<script setup lang="ts">
	import { Ref, onMounted, ref } from 'vue';
	import LandingPage from './view/LandingPage.vue';
	import Loading from './components/Loading.vue';

	const isLoading: Ref<boolean> = ref(true);

	// onMounted(() => {
		setTimeout(() => {
			isLoading.value = false;
			// console.log('cargo');

		}, 2000);

		// ver el  tiempo que dura la pagina en cargar
		// const t = performance.timing;
		// const time = t.domContentLoadedEventEnd - t.navigationStart;
		// console.log('tiempo de carga: ', time);
	// }),
</script>

<template>
	<Loading v-if="isLoading" />
	<LandingPage v-else />
</template>
