import { useAuthStore } from '~/stores/auth';

export default defineNuxtPlugin(() => {
  const auth = useAuthStore();

  // Initialize auth state from localStorage
  auth.initializeFromStorage();
}); 