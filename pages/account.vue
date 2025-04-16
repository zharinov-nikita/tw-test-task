<template>
  <div class="account-container">
    <div class="header">
      <div class="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <h1>Личный кабинет</h1>
      <button class="logout-button" @click="handleLogout">
        Выход
      </button>
    </div>

    <!-- Filters -->
    <div class="filters">
      <h2>Фильтры</h2>
      <div class="filter-grid">
        <input
          v-model="nameFilter"
          type="text"
          placeholder="Поиск по имени"
        />
        <input
          v-model="dateFilter"
          type="date"
          placeholder="Фильтр по дате"
        />
      </div>
    </div>

    <!-- Users Table -->
    <div class="users-table">
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Статус</th>
            <th>Дата создания</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users.filteredUsers" :key="user.name + user.surname">
            <td>{{ user.name }}</td>
            <td>{{ user.surname }}</td>
            <td>
              <span :class="['status-badge', user.active ? 'active' : 'inactive']">
                {{ user.active ? 'Активен' : 'Неактивен' }}
              </span>
            </td>
            <td>{{ user.created }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const auth = useAuthStore();
const users = useUsersStore();

const nameFilter = ref('');
const dateFilter = ref('');

watch(nameFilter, (value) => {
  users.setNameFilter(value);
});

watch(dateFilter, (value) => {
  users.setDateFilter(value);
});

const handleLogout = () => {
  auth.logout();
  router.push('/auth/login');
};

onMounted(async () => {
  auth.initializeFromStorage();
  if (!auth.isAuthenticated) {
    router.push('/auth/login');
    return;
  }
  await users.fetchUsers();
});
</script> 