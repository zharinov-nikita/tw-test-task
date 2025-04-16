import { defineStore } from 'pinia';
import type { AuthState, AuthUser } from '~/types';

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    isAuthenticated: false
  }),

  actions: {
    async login(username: string, password: string) {
      try {
        // In a real application, this would be an API call
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: { username, password }
        });
        
        this.user = response.user as AuthUser;
        this.isAuthenticated = true;
        
        // Only access localStorage on client side
        if (process.client) {
          localStorage.setItem('auth', JSON.stringify({
            user: this.user,
            isAuthenticated: true
          }));
        }
        
        return true;
      } catch (error) {
        console.error('Login error:', error);
        return false;
      }
    },

    logout() {
      this.user = null;
      this.isAuthenticated = false;
      if (process.client) {
        localStorage.removeItem('auth');
      }
    },

    initializeFromStorage() {
      if (process.client) {
        const stored = localStorage.getItem('auth');
        if (stored) {
          const { user, isAuthenticated } = JSON.parse(stored);
          this.user = user as AuthUser;
          this.isAuthenticated = isAuthenticated;
        }
      }
    }
  }
}); 