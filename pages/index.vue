<script setup lang="ts">
definePageMeta({
  title: "Hillsborough County Certified Backflow Testers",
});

const { fetchTesters, testers } = useTesters();
await fetchTesters();
</script>

<template>
  <div :aria-busy="testers.loading">
    <Testers />
  </div>
</template>
