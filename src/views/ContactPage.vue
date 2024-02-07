<template>
  <div class="main">
    <h1>Enviar Ticket</h1>
    <form>
      <div>
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="message"></textarea>
      </div>
      <button @click="submitForm">Enviar</button>
    </form>
  </div>
</template>

<script>
import '../assets/styles/ContactPage.css';
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);
    }
  }
};
</script>

<style>
</style>
