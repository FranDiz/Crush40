<template>
    <form class="form___register" @submit="handleSubmit" :disabled="!isFormValid">
        <div class="form___head">
            <h2 class="form___title">Registrarse en Crush40</h2>
            <router-link to="/" class="button">Volver</router-link>
        </div>

        <div class="form___separator">
            <label for="name" class="form___label">Nombre:</label>
            <input type="text" id="name" v-model="name" @blur="validateName" required class="form___input">
            <span v-if="nameError" class="error-message">El nombre solo debe contener letras</span>
        </div>
        <label for="password" class="form___label">Contraseña:</label>
        <input type="password" id="password" v-model="password" @blur="validatePassword" required class="form___input">
        <span v-if="passwordError" class="error-message">La contraseña debe tener al menos 8 caracteres</span>

        <label for="email" class="form___label" >Correo electrónico:</label>
        <input type="email" id="email" v-model="email" @blur="validateEmail" required class="form___input">
        <span v-if="emailError" class="error-message">Formato de correo electrónico inválido</span>

        <button type="submit" class="form___submit" @click="handleSubmit">Registrarse</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex'; 
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
    computed: {
        isFormValid() {
            return !this.nameError && !this.passwordError && !this.emailError && this.name && this.password && this.email; // Update the condition to include checking if the form fields are empty
        }
    },
    methods: {
        ...mapActions(['setIsLoggedIn']), 
        async handleSubmit(event) {
            event.preventDefault();
            if (this.isFormValid) {
                const newUser = {
                    id: Date.now(), // Generamos una ID única basada en la marca de tiempo actual
                    name: this.name,
                    email: this.email,
                    password: this.password
                };

                // Guardamos el nuevo usuario en el localStorage
                const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
                usuarios.push(newUser);
                localStorage.setItem('usuarios', JSON.stringify(usuarios));


                await this.setIsLoggedIn(true);
                console.log(this.$store.state.isLoggedIn);
            } else {
                await this.setIsLoggedIn(false);
                console.log(this.$store.state.isLoggedIn);
            }
        },
        validateName() {
            const regex = /^[a-zA-Z]+$/;
            this.nameError = !regex.test(this.name);
        },
        validatePassword() {
            this.passwordError = this.password.length < 8;
        },
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
