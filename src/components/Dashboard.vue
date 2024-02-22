<template>
    <button class="show-dashboard" @click="toggleDashboard" v-if="showButton">Mostrar Dashboard</button>
    <nav class="dashboard" v-show="showDashboard">
      <h1 class="dashboard__welcome">Bienvenido</h1>
      <ul class="dashboard__links">
        <router-link to="/" class="dashboard___link">Inicio</router-link>
        <router-link to="/categories" class="dashboard___link">Explorar por categorías</router-link>
        <router-link to="/contact" class="dashboard___link">Contacto</router-link>
        <router-link to="/" class="dashboard___link">¿Qué es Crush40?</router-link>
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
  data() {
    return {
      showDashboard: false,
      showButton: false
    };
  },
  methods: {
    toggleDashboard() {
      this.showDashboard = !this.showDashboard;
    },
    checkWidth() {
      this.showButton = window.innerWidth <= 768;
      this.showDashboard = !this.showButton;
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkWidth);
    this.checkWidth();
  },
  destroyed() {
    window.removeEventListener('resize', this.checkWidth);
  }
}
</script>

