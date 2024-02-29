<template>
    <header>
        <Header/>
    </header>
    <main>
        <LoginForm/>
    </main>
</template>

<script>
import Header from '../components/Header.vue';
import LoginForm from '../components/LoginForm.vue';
import '../assets/styles/LoginPage.css';
export default {
    components: {
        LoginForm,
        Header
    }
}
</script>

<style scoped>


</style>

