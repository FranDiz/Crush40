<template>
    <form class="form___login" @submit="handleSubmit" :disabled="!isFormValid">
        <div class="form___head">
            <h2 class="form___title">Entrar en Crush40</h2>
            <router-link to="/" class="button">Volver</router-link>
        </div>
            <label for="name" class="form___label">Nombre:</label>
            <input type="text" id="name" v-model="name" @blur="validateName" required class="form___input">
            <span v-if="nameError" class="error-message">El nombre solo debe contener letras</span>
            
        <label for="password" class="form___label">Contraseña:</label>
        <input type="password" id="password" v-model="password" @blur="validatePassword" required class="form___input">
        <span v-if="passwordError" class="error-message">La contraseña debe tener al menos 8 caracteres</span>

        <label for="email" class="form___label" >Correo electrónico:</label>
        <input type="email" id="email" v-model="email" @blur="validateEmail" required class="form___input">
        <span v-if="emailError" class="error-message">Formato de correo electrónico inválido</span>

        <button type="submit" :disabled="!isFormValid" class="form___submit">Entrar</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex';
import '../assets/styles/LoginForm.css';

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
            return !this.nameError && !this.passwordError && !this.emailError;
        }
    },
    methods: {
        ...mapActions(['setIsLoggedIn', 'setUserId']),
        handleSubmit(event) {
            event.preventDefault();
            if (this.isFormValid) {
                const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
                const usuarioEncontrado = usuarios.find(user => user.name === this.name && user.password === this.password && user.email === this.email);

                if (usuarioEncontrado) {
                    // Usuario encontrado, iniciar sesión
                    console.log('Inicio de sesión exitoso');
                    this.setIsLoggedIn(true);
                    this.setUserId(usuarioEncontrado.id);
                } else {
                    // Usuario no encontrado, mostrar mensaje de error
                    console.log('Nombre de usuario, correo electrónico o contraseña incorrectos');
                }
            } else {
                console.log('Formulario inválido');
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
