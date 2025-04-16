<template>
  <div class="error-container">
    <div class="error-content">
      <div class="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <button @click="handleReturn">Вернуться на главную</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const handleReturn = () => {
  router.push('/');
};
</script>

<style lang="less">
@import '~/assets/styles/main.less';

.error-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: @background-color;
  padding: 1rem;
}

.error-content {
  text-align: center;
  
  .logo {
    max-width: 200px;
    margin: 0 auto 2rem;
    
    img {
      width: 100%;
      height: auto;
    }
  }

  h1 {
    font-size: 6rem;
    font-weight: 700;
    color: @text-color;
    margin: 0 0 1rem;
  }

  p {
    font-size: 1.5rem;
    color: @text-color;
    margin-bottom: 2rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: @primary-color;
    color: @white;
    border: none;
    border-radius: @border-radius;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: darken(@primary-color, 10%);
    }
  }
}
</style> 