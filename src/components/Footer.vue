<script setup lang="ts">
import { inject, Ref, ref } from "vue";
import Logo from "/src/components/Logo.vue";

const year: Ref = ref(new Date().getFullYear());
const RRSS: any = inject("RRSS");
</script>

<template>
  <!-- <div class="bg-personal-brown-2 py-12 w-24 rounded-full absolute inset-x-0 -mt-10 mx-auto"></div> -->
  <footer>
    <div class="text-gray-200 bg-personal-dark-gray-blue-1 py-14">
      <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex font-medium items-center md:justify-start justify-center">
          <Logo
            classes="w-20 h-20 bg-gray-200 rounded-full pr-1"
            src="/assets/img/isotipo-luisandev.webp"
          />
        </a>
        <p class="text-base sm:ml-4 sm:mt-0 mt-4">
          {{ year }} —
          <a :href="RRSS.linkedin" rel="noopener noreferrer" class="ml-1" target="_blank" aria-label="Linkedin">
            @luisandev
          </a>
        </p>
        <div class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            :href="RRSS.facebook"
            target="_blank"
            aria-label="Facebook"
            class="inline-flex items-center focus:outline-none text-base text-gray-200 bg-personal-dark-gray-blue-1 hover:bg-gray-700 transition duration-200 ease-in px-3 py-2.5 mt-4 md:mt-0"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
              ></path>
            </svg>
          </a>
          <a
            :href="RRSS.twitter"
            target="_blank"
            aria-label="Twitter"
            class="inline-flex items-center focus:outline-none text-base text-gray-200 bg-personal-dark-gray-blue-1 hover:bg-gray-700 transition duration-200 ease-in px-3 py-2.5 mt-4 md:mt-0"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
              ></path>
            </svg>
          </a>
          <a
            :href="RRSS.instagram"
            target="_blank"
            aria-label="Instagram"
            class="inline-flex items-center focus:outline-none text-base text-gray-200 bg-personal-dark-gray-blue-1 hover:bg-gray-700 transition duration-200 ease-in px-3 py-2.5 mt-4 md:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              viewBox="0 0 50 50"
              stroke-width="5.5"
              stroke="#ffffff"
            >
              <path
                d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
              ></path>
            </svg>
          </a>
          <a
            :href="RRSS.github"
            target="_blank"
            aria-label="Github"
            class="inline-flex items-center focus:outline-none text-base text-gray-200 bg-personal-dark-gray-blue-1 hover:bg-gray-700 transition duration-200 ease-in px-3 py-2.5 mt-4 md:mt-0"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </a>
          <a
            :href="RRSS.linkedin"
            target="_blank"
            aria-label="Linkedin"
            class="inline-flex items-center focus:outline-none text-base text-gray-200 bg-personal-dark-gray-blue-1 hover:bg-gray-700 transition duration-200 ease-in px-3 py-2.5 mt-4 md:mt-0"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
