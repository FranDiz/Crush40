<template>
  <header class="header">
   <h1 class="header__logo">Crush40</h1>
    <div class="header__buttons">
      <RouterLink to="/login" class="button">Entrar</RouterLink>
      <RouterLink to="/register" class="button">Registrarse</RouterLink>
    </div>
  </header>
</template>

<script>
import '../assets/styles/Header.css';
import { RouterLink } from 'vue-router';
export default {
  name: 'Header',
}
</script>

<style>


</style>