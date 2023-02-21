<script setup lang="ts">
import { testers, fetchTesters } from "./lib/testers";
import Tester from "./components/Tester.vue";

fetchTesters();

const containerClass = import.meta.env.DEV
  ? "py-5 container"
  : "container-fluid";
</script>

<template>
  <div v-if="testers.loading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <article v-else :class="containerClass">
    <Tester />
  </article>
</template>
