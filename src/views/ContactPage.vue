<template>
  <header>
    <Header />
  </header>
  <main>
    <aside class="nav-dashboard">
      <Dashboard />
    </aside>
    <section class="form___ticket">
      <ContactForm/>
    </section>
  </main>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import Header from '../components/Header.vue';
import Dashboard from '../components/Dashboard.vue';
import '../assets/styles/ContactPage.css';
export default {
  components: { Header, Dashboard, ContactForm }
};
</script>


<style scoped>


</style>

