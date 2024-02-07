<template>
    <form class="form" @submit="handleSubmit">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="name" @blur="validateName" required>
        <span v-if="nameError" class="error-message">El nombre solo debe contener letras</span>

        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" @blur="validatePassword" required>
        <span v-if="passwordError" class="error-message">La contraseña debe tener al menos 8 caracteres</span>

        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" @blur="validateEmail" required>
        <span v-if="emailError" class="error-message">Formato de correo electrónico inválido</span>

        <button type="submit">Registrarse</button>
    </form>
</template>

<script>
import '../assets/styles/RegisterForm.css';

export default {
    data() {
        return {
            name: '',
            password: '',
            email: '',
            nameError: false,
            passwordError: false,
            emailError: false
        };
    },
    methods: {
        /**
         * Maneja el evento de envío del formulario.
         * @param {Event} event - Evento de envío del formulario.
         */
        handleSubmit(event) {
            event.preventDefault();
        },
        // Valida el nombre ingresado.
        validateName() {
            const regex = /^[a-zA-Z]+$/;
            this.nameError = !regex.test(this.name);
        },
        // Valida la contraseña ingresada.
        validatePassword() {
            this.passwordError = this.password.length < 8;
        },
        // Valida el correo electrónico ingresado.
        validateEmail() {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailError = !regex.test(this.email);
        }
    }
};
</script>

<style scoped>
.error-message {
    color: red;
}
</style>
