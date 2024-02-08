<template>
  <div class="main">
    <Header />
    <h1>Enviar Ticket</h1>
    <ContactForm/>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import Header from '../components/Header.vue';
import Dashboard from '../components/Dashboard.vue';
export default {
  components: { Header, Dashboard, ContactForm }
};
</script>
<style>
</style>
