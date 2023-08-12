<script setup lang="ts">
	import { inject } from 'vue';

	const trans: any = inject('trans');
</script>
<template>
	<section
		class="flex items-center justify-center py-20 md:py-0 animate-fade-in-down bg-neutral-900 md:h-screen px-8 md:px-0"
		id="whoiam">
		<div class="container md:px-5 mx-auto">
			<div class="flex flex-col md:flex-row w-full gap-20 items-center">
				<div class="max-w-7xl mx-auto">
					<h1 class="text-center text-5xl sm:text-7xl lg:text-9xl font-semibold mb-2 text-gray-50 items-center uppercase leading-tight">
						{{ trans('ing') }}
						{{ trans('fullName') }}
					</h1>
					<article class="w-100 flex justify-center animate-slide-in-blurred-top">
						<hr class="w-40 lg:w-96 border-2 border-personal-gray-1 rounded my-2" />
					</article>
					<article class="mt-5">
						<p class="text-gray-200 text-3xl font-medium text-center">
							{{ trans('iamdeveloper') }}
						</p>
					</article>
					<article class="mt-5 max-w-6xl mx-auto">
						<p class="leading-loose text-gray-200 text-center lg:text-left font-normal">
							<span>{{ trans('aboutMe') }}</span>
						</p>
            <p class="leading-loose text-gray-400 text-center lg:text-left font-light italic mt-4">
              {{ trans('phrase') }}
            </p>
					</article>
					<article class="flex justify-center mt-7">
						<a
							href="https://www.canva.com/design/DAE3z8Gaf0Y/BqofIBrei_9AXtz83ihXgA/view?utm_content=DAE3z8Gaf0Y&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
							target="_blank"
							class="inline-flex items-center focus:outline-none text-lg font-medium text-gray-200 bg-personal-gray-1 hover:bg-personal-gray-3 px-4 py-3 rounded transition-all duration-200 ease-in">
							<font-awesome-icon
								icon="fa-solid fa-file-lines"
								class="mr-2" />
							{{ trans('downloadCV') }}
						</a>
					</article>
				</div>
			</div>
		</div>
	</section>
</template>
