<template>
    <form class="form___contact" @submit="handleSubmit">
    <div class="form___head">
      <h2 class="form___title">EnviarTicket</h2>
      <router-link to="/" class="button">Volver</router-link>
    </div>
      <label for="asunto" class="form___label">Asunto:</label>
      <input type="text" id="asunto" required class="form___input">
      <span v-if="nameError" class="error-message">El nombre solo debe contener letras</span>

      <label for="correo" class="form___label">Correo Electronico:</label>
      <input type="email" id="correo" required class="form___input">
      <span v-if="passwordError" class="error-message">La contraseña debe tener al menos 8 caracteres</span>
      
      <label for="contenido" class="form___label" >Contenido:</label>
      <textarea id="contenido" required class="form___textarea"></textarea>
      <span v-if="emailError" class="error-message">Formato de correo electrónico inválido</span>

        <button type="submit" :disabled="!isFormValid" class="form___submit">Enviar</button>
    </form>
</template>

<script>
import '../assets/styles/ContactForm.css';
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
  },
}
</script>

<style scoped>

</style>