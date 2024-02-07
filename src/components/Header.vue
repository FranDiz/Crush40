<template>
  <header class="header">
   <h1 class="header__logo">{{ title }}</h1>
    <div class="header__buttons">
      <RouterLink to="/" class="button">{{login}}</RouterLink>
      <RouterLink to="/register" class="button">{{register}}</RouterLink>
    </div>
  </header>
</template>

<script>
import '../assets/styles/Header.css';
import { RouterLink } from 'vue-router';
export default {
  data() {
    return {
      title: 'Crush 40',
      login: 'Login',
      register: 'Register'
    }
  },  
  name: 'Header',
}
</script>

<style>


</style>