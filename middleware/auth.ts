import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();
  
  // Initialize auth state from storage
  auth.initializeFromStorage();

  // If user is not authenticated and trying to access protected route
  if (!auth.isAuthenticated && to.path !== '/auth/login') {
    return navigateTo('/auth/login');
  }

  // If user is authenticated and trying to access login page
  if (auth.isAuthenticated && to.path === '/auth/login') {
    return navigateTo('/account');
  }
}); 