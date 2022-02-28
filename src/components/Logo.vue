<template>
  <img :src="src" alt="Personal logo" :class="classes" />
</template>

<script setup lang="ts">
defineProps<{ classes: string; src: string }>();
</script>
