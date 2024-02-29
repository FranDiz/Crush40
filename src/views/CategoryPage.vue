<template>
    <header>
        <Header/>
    </header>
    <main>
        <aside class="nav-dashboard">
            <Dashboard/>
        </aside>
        <section class="category-results">
            <CategoryExplorer/>
        </section>
    </main>
</template>

<script>
import Header from '../components/Header.vue';
import Dashboard from '../components/Dashboard.vue';
import CategoryExplorer from '../components/CategoryExplorer.vue';
import '../assets/styles/CategoryPage.css';
export default {
    components: { Header, Dashboard, CategoryExplorer }
    }
</script>

<style scoped>


</style>

