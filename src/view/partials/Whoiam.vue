<script setup lang="ts">
	import { inject } from 'vue';

	const trans: any = inject('trans');
	const links: any = inject('links');
</script>
<template>
	<section
		class="flex items-center justify-center py-20 md:py-0 bg-personal-dark-blue-1 md:h-screen px-8 md:px-0 relative"
		id="whoiam">
		<div class="absolute top-0 -mt-40 sm:-mt-64 gdend py-52 w-full sm:w-1/3 opacity-50">&nbsp;</div>
		<div class="container md:px-5 mx-auto">
			<div class="flex flex-col md:flex-row w-full gap-20 items-center">
				<div class="max-w-7xl mx-auto">
					<h1 class="text-center text-4xl sm:text-7xl lg:text-9xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-personal-gray-1 font-bold leading-tight uppercase animate-fade-in-down">
						{{ trans('ing') }}
						{{ trans('fullName') }}
					</h1>
					<!-- <article class="w-100 flex justify-center animate-slide-in-blurred-top">
						<hr class="w-40 lg:w-96 border-2 border-personal-gray-1 rounded my-2" />
					</article> -->
					<article class="mt-5 animate-fade-in-down">
						<p class="text-2xl text-center font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-personal-gray-1">
							{{ trans('iamdeveloper') }}
						</p>
					</article>
					<article class="mt-5 max-w-6xl mx-auto animate-fade-in-down">
						<p class="leading-normal text-gray-400 text-center font-normal text-xl">
							<span>{{ trans('aboutMe') }}</span>
						</p>
						<p class="leading-normal text-gray-400 text-center font-light mt-4">
							{{ trans('phrase') }}
						</p>
					</article>
					<article class="flex justify-center mt-7">
						<a
							:href="links.cv"
							target="_blank"
							class="inline-flex items-center focus:outline-none text-lg font-medium text-gray-200 bg-gradient-to-r from-sky-500 from-5% to-personal-gray-1 to-95% hover:bg-gradient-to-r hover:from-sky-800 hover:from-10% hover:to-personal-gray-1 hover:to-90% px-5 py-3 rounded-3xl transition duration-300 ease-in-out">
							<font-awesome-icon
								icon="fa-solid fa-file-lines"
								class="mr-2" />
							{{ trans('downloadCV') }}
						</a>
					</article>
					<article class="flex justify-center mt-7">
						<font-awesome-icon
							icon="fa-solid fa-arrow-down motion-safe:animate-bounce"
							class="text-gray-400" />
					</article>
				</div>
			</div>
		</div>
	</section>
</template>
