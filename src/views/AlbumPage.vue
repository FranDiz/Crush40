<template>
    <header>
        <Header/>
    </header>
    <main>
        <aside class="nav-dashboard">
            <Dashboard/>
        </aside>
        <section class="album___box">
          <AlbumSongs :albumId="albumId" />
        </section>
    </main>
</template>

<script>
import Header from '../components/Header.vue';
import AlbumSongs from '../components/AlbumSongs.vue';
import Dashboard from '../components/Dashboard.vue';
import '../assets/styles/AlbumPage.css';

export default {
  components: {Header, AlbumSongs, Dashboard},
  data() {
    return {
      albumId: this.$route.params.id
    };
  }
  
};
</script>

<style>

</style>