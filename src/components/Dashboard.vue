<template>
  <nav class="dashboard">
    <h1 class="dashboard__welcome">Welcome</h1>
      <ul class="dashboard__links">
      <router-link to="/register">Registrarse</router-link>
      <router-link to="/contact">Contacto</router-link>
    </ul>
    <form @submit.prevent>
      <input class="dashboard__input-playlist" type="text" placeholder="Search" />
    </form>
    <div class="dashboard__scroll-section">
    </div>
  </nav>
</template>

<script>
import '../assets/styles/dashboard.css';

export default {
  name: 'Dashboard',
}
</script>


