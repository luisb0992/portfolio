<script setup lang="ts">
	import { inject } from 'vue';
	import useProject from './../composables/useProject';

  const {
    tecSelected,
    technologies,
    yearSelected,
    years,
    proyectsOrdered,
    isThereFilter,
    showMoreProjects,
    filterForTechnologie,
    filterForYear,
    showMoreOrLessProjects,
  } = useProject();

	const trans: any = inject('trans');
</script>

<template>
	<div class="bg-personal-gray-1 py-12 w-24 rounded-full absolute inset-x-0 -mt-10 mx-auto"></div>

	<section
		class="text-gray-600 bg-personal-gray-1"
		id="projects">
		<div class="container px-5 py-24 mx-auto">
			<div class="flex flex-col text-center w-full mb-10">
				<h4 class="text-sm text-gray-200 tracking-widest font-semibold mb-1">
					{{ trans('allProjects') }}
				</h4>
				<h3 class="text-4xl font-medium text-gray-100">
					{{ trans('projects') }}
				</h3>
			</div>

			<!-- filtros de búsqueda -->
			<div class="mb-4">
				<div class="flex flex-wrap flex-row items-center justify-center">
					<div class="mb-3 mr-1">
						<select
							class="appearance-none block w-auto px-3 py-1.5 text-base font-normal text-gray-200 bg-personal-gray-1 bg-clip-padding bg-no-repeat border-2 border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-200 focus:bg-personal-gray-1 focus:border-gray-600 focus:outline-none"
							@change="filterForTechnologie()"
							v-model="tecSelected">
							<option
								value="0"
								selected>
								{{ trans('technologies') }}
							</option>
							<option
								:value="tec"
								v-for="(tec, index) in technologies"
								:key="index">
								{{ tec }}
							</option>
						</select>
					</div>
					<div class="mb-3">
						<select
							class="appearance-none block w-auto px-3 py-1.5 text-base font-normal text-gray-200 bg-personal-gray-1 bg-clip-padding bg-no-repeat border-2 border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-200 focus:bg-personal-gray-1 focus:border-gray-600 focus:outline-none"
							@change="filterForYear()"
							v-model="yearSelected">
							<option
								value="0"
								selected>
								{{ trans('ano') }}
							</option>
							<option
								:value="year"
								v-for="year in years"
								:key="year">
								{{ year }}
							</option>
						</select>
					</div>
				</div>
			</div>
			<!-- /filtros de búsqueda -->

			<!-- cards - proyectos -->
			<div class="flex flex-wrap items-stretch transition ease-in-out delay-150">
				<div
					class="xl:w-1/4 md:w-1/2 p-2"
					v-for="(proyect, index) in proyectsOrdered"
					:key="index">
					<div class="rounded-lg bg-personal-gray-2 shadow-2xl h-full flex flex-col justify-between animate-swing-in-top-fwd hover:bg-personal-gray-3 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500">
						<div class="p-4">
							<img
								class="h-40 rounded w-full object-cover object-center mb-6"
								width="100%"
								height="160px"
								:src="`/assets/img/projects/${proyect.image}`"
								:alt="proyect.name" />
							<h2 class="text-xl text-gray-200 font-semibold mb-4">
								{{ proyect.name }}
								<span class="text-gray-400 text-sm">- {{ proyect.year }} </span>
							</h2>
							<p class="leading-relaxed text-base text-gray-400">
								{{ proyect.description }}
							</p>
							<p class="flex flex-wrap my-4 gap-2">
								<span
									class="bg-personal-gray-1 text-gray-50 text-xs font-semibold mr-2 px-2.5 py-1 rounded"
									v-for="(tec, index2) in proyect.tecnologies"
									:key="index2">
									{{ tec.category }}
								</span>
							</p>
						</div>
						<div class="flex flex-row justify-between px-4 items-center">
							<div class="py-4">
								<a
									:href="proyect.repo ?? '#'"
									class="text-gray-400 inline-flex items-center text-base hover:text-gray-300"
									target="_blank">
									{{ trans('visitarRepo') }}
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-4 h-4 ml-2 mt-1"
										viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
							<div class="py-4">
								<a
									:href="proyect.url"
									class="text-gray-400 inline-flex items-center text-base hover:text-gray-300"
									target="_blank">
									<p>
										{{ trans('visitarSitio') }}
									</p>
									<p>
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											class="w-4 h-4 ml-2 mt-1"
											viewBox="0 0 24 24">
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /cards -->

			<!-- mostrar mas -->
			<div
				class="flex justify-center items-center py-6"
				v-if="isThereFilter">
				<button
					class="text-base font-light text-gray-200 bg-personal-gray-2 hover:bg-personal-gray-3 px-4 py-3 rounded"
					@click="showMoreOrLessProjects()">
					<span v-if="showMoreProjects"> {{ trans('showMore') }} </span>
					<span v-else> {{ trans('showLess') }} </span>
				</button>
			</div>
			<!-- /mostrar mas -->
		</div>
	</section>
</template>
