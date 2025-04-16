<template>
  <div class="login-container">
    <div class="login-card">
      <div class="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <h2>Вход в систему</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <input
            v-model="username"
            type="email"
            required
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <input
            v-model="password"
            type="password"
            required
            placeholder="Пароль"
          />
        </div>

        <div v-if="error" class="error-message">
          Введены неверные данные авторизации. Попробуйте ещё раз
        </div>

        <button type="submit" :disabled="loading">
          {{ loading ? 'Загрузка...' : 'Войти' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const auth = useAuthStore();

const username = ref('');
const password = ref('');
const loading = ref(false);
const error = ref(false);

const handleLogin = async () => {
  loading.value = true;
  error.value = false;

  try {
    const success = await auth.login(username.value, password.value);
    if (success) {
      router.push('/account');
    } else {
      error.value = true;
    }
  } catch {
    error.value = true;
  } finally {
    loading.value = false;
  }
};

// Redirect if already logged in
onMounted(() => {
  auth.initializeFromStorage();
  if (auth.isAuthenticated) {
    router.push('/account');
  }
});
</script> 