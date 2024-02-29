<template>
    <header>
        <Header/>
    </header>
    <main>
        <aside class="nav-dashboard">
            <Dashboard/>
        </aside>
        <section class="category-songs">
            <CategoryPlaylists :categoryId="categoryId"/>
        </section>
    </main>
</template>

<script>
import Header from '../components/Header.vue';
import Dashboard from '../components/Dashboard.vue';
import CategoryPlaylists from '../components/CategoryPlaylists.vue';
import '../assets/styles/CategoryPage.css';
export default {
    components: { Header, Dashboard, CategoryPlaylists },
    data() {
        return {
            categoryId: this.$route.params.id
        }
    },
}
</script>

<style scoped>


</style>

