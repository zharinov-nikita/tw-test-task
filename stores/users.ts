import { defineStore } from 'pinia';
import type { UsersState, User } from '~/types';
import dayjs from 'dayjs';

export const useUsersStore = defineStore('users', {
  state: (): UsersState => ({
    users: [],
    filteredUsers: [],
    dateFilter: '',
    nameFilter: ''
  }),

  actions: {
    async fetchUsers() {
      try {
        // In a real application, this would be an API call
        const response = await $fetch('/api/users');
        this.users = response as User[];
        this.applyFilters();
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },

    applyFilters() {
      let filtered = [...this.users];

      if (this.dateFilter) {
        filtered = filtered.filter(user => 
          dayjs(user.created, 'DD.MM.YYYY HH:mm:ss').isSame(dayjs(this.dateFilter), 'day')
        );
      }

      if (this.nameFilter) {
        const searchTerm = this.nameFilter.toLowerCase();
        filtered = filtered.filter(user =>
          user.name.toLowerCase().includes(searchTerm) ||
          user.surname.toLowerCase().includes(searchTerm)
        );
      }

      this.filteredUsers = filtered;
    },

    setDateFilter(date: string) {
      this.dateFilter = date;
      this.applyFilters();
    },

    setNameFilter(name: string) {
      this.nameFilter = name;
      this.applyFilters();
    }
  }
}); 