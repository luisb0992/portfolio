<script setup lang="ts">
	import { Ref, ref } from 'vue';
	import LandingPage from './view/LandingPage.vue';
	import Loading from './components/Loading.vue';

	const isLoading: Ref<boolean> = ref(true);

	setTimeout(() => {
		isLoading.value = false;
	}, 2000);
</script>

<template>
	<Loading v-if="isLoading" />
	<LandingPage v-else />
</template>
