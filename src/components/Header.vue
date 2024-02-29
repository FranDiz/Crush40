<template>
  <header class="header">
   <h1 class="header__logo">Crush40</h1>
   <DashboardDrop />
    <div class="header__buttons">
      <RouterLink to="/login" class="button">Entrar</RouterLink>
      <RouterLink to="/register" class="button">Registrarse</RouterLink>
    </div>
  </header>
</template>

<script>
import '../assets/styles/Header.css';
import DashboardDrop from '../components/DashboardDrop.vue';
import { RouterLink } from 'vue-router';
export default {
  components: { DashboardDrop, RouterLink },
}
</script>

<style scoped>


</style>

