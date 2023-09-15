<script setup lang="ts">
	import { inject } from 'vue';

	const trans: any = inject('trans');
</script>

<template>
	<section
		class="bg-gradient-to-t from-personal-brown-1 to-[#2b262a]"
		id="skills">
		<div class="container px-5 py-24 mx-auto">
			<!-- header -->
			<div class="flex flex-col text-center w-full mb-10">
				<p class="text-sm text-gray-300 tracking-widest font-semibold mb-1">
					{{ trans('allExperience') }}
				</p>
				<h3 class="text-4xl font-medium text-gray-200">
					{{ trans('skills') }}
				</h3>
			</div>
			<!-- /header -->

			<!-- contenido -->
			<div class="flex flex-wrap">
				<!-- frontend -->
				<div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500">
					<div class="flex rounded-lg h-full p-8 flex-col bg-personal-brown-1 shadow-2xl">
						<div class="flex items-center mb-3 -ml-3">
							<div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-personal-gray-3 text-white flex-shrink-0">
								<font-awesome-icon icon="fa-solid fa-code" />
							</div>
							<h3 class="text-gray-50 text-lg font-semibold">
								{{ trans('frontend') }}
							</h3>
						</div>
						<div class="flex-grow text-gray-200">
							<div class="flex flex-col items-start justify-center text-left space-y-5 text-base">
								<a class="inline-flex justify-center">
									<span class="bg-gray-200 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('html') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('css') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('javascript') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('typescript') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('sass') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('npm') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('webpack') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('vite') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('vuejs') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('reactjs') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('angularjs') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('tailwind') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('pwa') }}</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- backend -->
				<div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500">
					<div class="flex rounded-lg h-full p-8 flex-col bg-personal-brown-1 shadow-2xl">
						<div class="flex items-center mb-3 -ml-3">
							<div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-personal-gray-3 text-white flex-shrink-0 font-extrabold">
								<font-awesome-icon icon="fa-solid fa-cube" />
							</div>
							<h2 class="text-gray-50 text-lg font-semibold">
								{{ trans('backend') }}
							</h2>
						</div>
						<div class="flex-grow text-gray-200">
							<div class="flex flex-col items-start text-left space-y-5 leading-relaxed text-base">
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('php') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('nodejs') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('api') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('rest') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('laravel') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('express') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('caching') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('ssr') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('https') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('ssl') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('cors') }}
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Base de datos -->
				<div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500">
					<div class="flex rounded-lg h-full p-8 flex-col bg-personal-brown-1 shadow-2xl">
						<div class="flex items-center mb-3 -ml-3">
							<div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-personal-gray-3 text-white flex-shrink-0">
								<font-awesome-icon icon="fa-solid fa-database" />
							</div>
							<h2 class="text-gray-50 text-lg font-semibold">
								{{ trans('database') }}
							</h2>
						</div>
						<div class="flex-grow text-gray-200">
							<div class="flex flex-col items-start text-left space-y-5 leading-relaxed text-base">
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('mysql') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('mariadb') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('postgresql') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('mssql') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('mongodb') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('firebase') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('indexdb') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('orm') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('transaction') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('db_normalization') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('authentication') }}
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- herramientas -->
				<div class="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500">
					<div class="flex rounded-lg h-full p-8 flex-col bg-personal-brown-1 shadow-2xl">
						<div class="flex items-center mb-3 -ml-3">
							<div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-personal-gray-3 text-white flex-shrink-0">
								<font-awesome-icon icon="fa-solid fa-screwdriver-wrench" />
							</div>
							<h2 class="text-gray-50 text-lg font-semibold">
								{{ trans('tools') }}
							</h2>
						</div>
						<div class="flex-grow text-gray-200">
							<div class="flex flex-col items-start text-left space-y-5 leading-relaxed text-base">
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('github') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('gitlab') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('bitbucket') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('git') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('unittest') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('solid') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('websocket') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('apache') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>
										{{ trans('docker') }}
									</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('jest') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('cypress') }}</span>
								</a>
								<a class="inline-flex justify-center">
									<span class="bg-gray-100 text-personal-gray-1 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
										<font-awesome-icon icon="fas fa-check text-xs" />
									</span>
									<span>{{ trans('electron') }}</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /contenido -->
		</div>
	</section>
</template>
