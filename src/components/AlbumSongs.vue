<template class="album___box">
  <div class = album___info>
    <img v-if="product" :src="product.images[0].url" alt="album cover" class="album___cover">
    <h2 v-if="product" class="album___title">{{ product.name }}</h2>
  </div>
    <ul v-if="product" class="album__tracks-list">
      <li v-for="item in product.tracks.items" :key="item.id" class="album___tracks">
        {{ item.name }} - {{songDuration(item.duration_ms) }}
      </li>
    </ul>
    <ul v-else>
      <li class="album___tracks">Cargando...</li>
    </ul>
</template>

<script>
import axios from 'axios';
import '../assets/disc_animation.css';
import '../assets/styles/AlbumSongs.css';
export default {
  props: {
    albumId: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      product: null,
      searchUrl: `https://api.spotify.com/v1/albums/${this.albumId}`,
      CLIENT_ID: 'b94ff936eb4b484397fabf9f5822d61d',
      CLIENT_SECRET: '23237797c4354eae8b699e6691d8efa2',
      token: ''
    };
  },
  computed: {
    songDuration() {
      return function(duration_ms) {
        if (typeof duration_ms !== 'number') {
          return '';
        }
        const durationInSeconds = duration_ms / 1000;
        const minutes = Math.floor(durationInSeconds / 60);
        const seconds = Math.floor(durationInSeconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      };
    }
  },

  created() {
    let parametrosAutor = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + this.CLIENT_ID + '&client_secret=' + this.CLIENT_SECRET
    };
    fetch('https://accounts.spotify.com/api/token', parametrosAutor)
      .then(result => result.json())
      .then(data => {
        this.token = data.access_token;
        axios.get(this.searchUrl, {
          headers: {
            'Authorization': 'Bearer ' + this.token
          }
        })
          .then(response => {
            this.product = response.data;
            console.log(this.product);
          })
          .catch(error => {
            console.error(error);
          });
      });
  }
}
</script>

<style>

</style>