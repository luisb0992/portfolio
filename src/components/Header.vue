<script setup lang="ts">
	import { inject, Ref, ref } from 'vue';
	import { lang } from './../lang/config';
	import Logo from '/src/components/Logo.vue';

	// redes
	const RRSS: any = inject('RRSS');
	const trans: any = inject('trans');
	const es: Ref<boolean> = ref(true);

	/**
	 * Cambiar de lenguaje
	 */
	const changeLanguaje: VoidFunction = () => {
		if (es.value) {
			es.value = false;
			return (lang.lang = 'us');
		}

		es.value = true;
		lang.lang = 'es';
	};

	/**
	 * Moverse entre secciones
	 */
	const toScroll: Function = (id: string) => {
		const section = document.getElementById(id);
		const position = section ? section.offsetTop : 0;
		window.scrollTo({ top: position, behavior: 'smooth' });
	};
</script>

<template>
	<header class="bg-personal-dark-blue-1 sticky top-0 z-[1]">
		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-200">
			<nav class="flex lg:w-2/5 flex-wrap items-center text-sm sm:text-base md:ml-auto py-2 justify-center sm:justify-start gap-3 sm:gap-0">
				<a
					class="mr-5 hover:text-sky-300 transition-all duration-300"
					href="javascript:void(0)"
					@click="toScroll('home')">
					{{ trans('home') }}
				</a>
				<a
					class="mr-5 hover:text-sky-300 transition-all duration-300"
					href="javascript:void(0)"
					@click="toScroll('whoiam')">
					{{ trans('whoiam') }}
				</a>
				<a
					class="mr-5 hover:text-sky-300 transition-all duration-300"
					href="javascript:void(0)"
					@click="toScroll('projects')">
					{{ trans('projects') }}
				</a>
				<a
					class="hover:text-sky-300 transition-all duration-300"
					href="javascript:void(0)"
					@click="toScroll('skills')">
					{{ trans('skills') }}
				</a>
			</nav>
			<a class="hidden sm:flex order-first lg:order-none lg:w-1/5 font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
				<Logo
					classes="w-12 h-12 bg-gray-200 rounded-full pr-1 aspect-square"
					src="/assets/img/isotipo-luisandev.webp" />
			</a>

			<div class="lg:w-2/5 inline-flex justify-center lg:justify-end items-center">
				<a
					:href="RRSS.linkedin"
					target="_blank"
					aria-label="Linkedin"
					class="inline-flex items-center text-base bg-personal-dark-gray-blue-1 text-white hover:bg-gray-700 px-3 py-2 mt-4 md:mt-0 transition-all duration-300">
					<font-awesome-icon icon="fa-brands fa-linkedin-in" />
				</a>
				<a
					:href="RRSS.github"
					target="_blank"
					aria-label="Github"
					class="inline-flex items-center text-base bg-personal-dark-gray-blue-1 text-white hover:bg-gray-700 px-3 py-2 mt-4 md:mt-0 transition-all duration-300">
					<font-awesome-icon icon="fa-brands fa-github" />
				</a>
				<a
					:href="'mailto:' + RRSS.emailOne"
					target="_blank"
					aria-label="Email"
					class="inline-flex items-center text-base bg-personal-dark-gray-blue-1 text-white hover:bg-gray-700 px-3 py-2 mt-4 md:mt-0 transition-all duration-300">
					<font-awesome-icon icon="fa-solid fa-envelope" />
				</a>
				<a
					:href="RRSS.whatsapp"
					target="_blank"
					aria-label="Whatsapp"
					class="inline-flex items-center text-base bg-personal-dark-gray-blue-1 text-white hover:bg-gray-700 px-3 py-2 mt-4 md:mt-0 transition-all duration-300">
					<font-awesome-icon icon="fa-brands fa-whatsapp" />
				</a>
				<div class="border-r mx-2 border-gray-600 mt-4 lg:mt-0">&nbsp;</div>
				<button
					class="inline-flex items-center bg-personal-dark-gray-blue-1 border-0 py-1 px-3 text-base mt-4 md:mt-0 transition-all duration-300"
					:class="es ? 'bg-gray-600 text-white hover:bg-gray-700' : 'hover:bg-gray-700'"
					@click="changeLanguaje()"
					:disabled="es">
					<span> {{ trans('spanish') }} </span>
				</button>
				<button
					class="inline-flex items-center bg-personal-dark-gray-blue-1 border-0 py-1 px-3 text-base mt-4 md:mt-0 transition-all duration-300"
					:class="!es ? 'bg-gray-600 text-white hover:bg-gray-700' : 'hover:bg-gray-700'"
					@click="changeLanguaje()"
					:disabled="!es">
					<span> {{ trans('english') }} </span>
				</button>
			</div>
		</div>
	</header>
</template>
