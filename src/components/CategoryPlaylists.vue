<template>
    <ul class="category-playlist__list">
      <li class="category-playlist__item" v-for="playlist in product && product.playlists.items" :key="playlist.id">
        <img :src="playlist.images[0].url" :alt="playlist.name" class="category-playlist__img" />
        <span class="category-playlist__name">{{ playlist.name }}</span>
      </li>
    </ul>
</template>

<script>
import axios from 'axios';
import '../assets/styles/CategoryPlaylists.css';

export default {
    props: {
        categoryId: {
            type: String,
            default: null
        }
    },
    data() {
    return {
      product: null,
      searchUrl: `https://api.spotify.com/v1/browse/categories/${this.categoryId}/playlists`,
      CLIENT_ID: 'b94ff936eb4b484397fabf9f5822d61d',
      CLIENT_SECRET: '23237797c4354eae8b699e6691d8efa2',
      token: ''
    };
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
      console.log(this.categoryId)
  }
}
</script>

<style>

</style>