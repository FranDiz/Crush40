<template>
    <header>
        <Header/>
    </header>
    <main>
        <aside class="nav-dashboard">
            <Dashboard/>
        </aside>
        <section class="search-results">
            <SearchList/>
        </section>
    </main>
</template>

<script>
import Header from '../components/Header.vue';
import Dashboard from '../components/Dashboard.vue';
import SearchList from '../components/SearchList.vue';
import '../assets/styles/LandingPage.css';
export default {
    components: { Header, Dashboard, SearchList }
}
</script>

<style>

</style>