<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Add global error handling if needed
onErrorCaptured((err) => {
  console.error('Global error:', err);
  return false;
});
</script>
