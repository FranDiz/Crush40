<template>
    <header>
        <Header/>
    </header>
    <main>
        <aside class="nav-dashboard">
            <Dashboard/>
        </aside>
        <section class="category-songs">
            <CategorySongs :categoryId="categoryId"/>
        </section>
    </main>
</template>

<script>
import Header from '../components/Header.vue';
import Dashboard from '../components/Dashboard.vue';
import CategorySongs from '../components/CategorySongs.vue';
import '../assets/styles/CategoryPage.css';
export default {
    components: { Header, Dashboard, CategorySongs },
    data() {
        return {
            categoryId: this.$route.params.id
        }
    },
}
</script>
