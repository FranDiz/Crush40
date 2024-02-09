<template>
  <Header />
  <AlbumSongs :albumId="albumId" />

</template> 

<script>
import Header from '../components/Header.vue';
import AlbumSongs from '../components/AlbumSongs.vue';


export default {
  components: {Header, AlbumSongs},
  data() {
    return {
      albumId: this.$route.params.id
    };
  }
};
</script>

<style>

</style>