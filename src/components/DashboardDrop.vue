<template>
  <div>
    <button @click="toggleDashboard">Toggle Dashboard</button>
    <div v-if="showDashboard">
      <h2>Dashboard</h2>
      <p>Dashboard content goes here</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDashboard: false
    };
  },
  methods: {
    toggleDashboard() {
      this.showDashboard = !this.showDashboard;
    }
  }
};
</script>

<style scoped>
/* Your component styles go here */
</style>
