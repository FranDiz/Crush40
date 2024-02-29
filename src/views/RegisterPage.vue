<template>
    <header>
        <Header/>
    </header>
    <main>
        <RegisterForm/>
    </main>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue';
import Header from '../components/Header.vue';
import '../assets/styles/RegisterPage.css';
export default {
    components: {
        RegisterForm,
        Header
    }
}
</script>

<style scoped>


</style>

