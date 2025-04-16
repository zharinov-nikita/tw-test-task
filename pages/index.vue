<script setup lang="ts">
const router = useRouter();
const auth = useAuthStore();

// Check authentication and redirect accordingly
onMounted(() => {
  auth.initializeFromStorage();
  if (auth.isAuthenticated) {
    router.push('/account');
  } else {
    router.push('/auth/login');
  }
});
</script>

<template>
  <div class="loading-container">
    <div class="loading-spinner"></div>
  </div>
</template>

<style lang="less">
@import '~/assets/styles/main.less';

.loading-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: @background-color;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid @primary-color;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> 