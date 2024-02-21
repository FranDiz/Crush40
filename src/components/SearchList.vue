<template>
    <form class="form___search" @submit.prevent="search">
      <select v-model="searchType" class="form___search-type">
      <option value="track" class="form___search-type-value">Canción</option>
      <option value="artist" class="form___search-type-value">Artista</option>
      <option value="album" class="form___search-type-value"> Álbum</option>
    </select>
      <input class="input-songs" type="text" v-model="query" placeholder="Buscar una canción" />
      <button type="submit" class="button-search">Buscar</button>
    </form>
    <ul v-if="results" class="results">
      <li v-for="result in results" :key="result.id" class="portrait">
            <template v-if="searchType === 'track'">
              <router-link :to="`/product/${result.id}`">
              <img :src="result.album.images[0].url" alt="Portada del álbum" class="portrait-img" />
              </router-link>
              <span class="portrait-title">{{ result.name }} por {{ result.artists[0].name }}</span>
            </template>
            <template v-else-if="searchType === 'artist'">
              <router-link :to="`/product/${result.id}`">
              <img :src="result.images[0].url" alt="Portada del álbum" class="portrait-img" />
              </router-link>
              <span class="portrait-title">{{ result.name }}</span>
            </template>
            <template v-else-if="searchType === 'album'">
              <router-link :to="`/product/${result.id}`">
              <img :src="result.images[0].url" alt="Portada del álbum" class="portrait-img" />
              </router-link>
              <span class="portrait-title">{{ result.name }} de {{ result.artists[0].name }}</span>
            </template>
      </li>
    </ul>
</template>


<script>
import { ref, watchEffect, watch } from 'vue'
import axios from 'axios'
import '../assets/styles/SearchList.css'

export default {

  setup() {
    const query = ref('')
    const results = ref(null)
    const token = ref('')
    const searchType = ref('track')

    const CLIENT_ID = 'b94ff936eb4b484397fabf9f5822d61d'
    const CLIENT_SECRET = '23237797c4354eae8b699e6691d8efa2'

    watchEffect(() => {
      let parametrosAutor = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
      }
      fetch('https://accounts.spotify.com/api/token', parametrosAutor)
        .then(result => result.json())
        .then(data => (token.value = data.access_token))
    })

    watch([query], () => {
      search()
    })

    const search = async () => {
      results.value = null
      let searchUrl = ''
      if (searchType.value === 'track') {
        searchUrl = `https://api.spotify.com/v1/search?type=track&q=${query.value}`
      } else if (searchType.value === 'artist') {
        searchUrl = `https://api.spotify.com/v1/search?type=artist&q=${query.value}`
   
      } else if (searchType.value === 'album') {
        searchUrl = `https://api.spotify.com/v1/search?type=album&q=${query.value}`
      }

      const response = await axios.get(searchUrl, {
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      })

      if (searchType.value === 'track') {
        results.value = response.data.tracks.items
      } else if (searchType.value === 'artist') {
        results.value = response.data.artists.items
      } else if (searchType.value === 'album') {
        results.value = response.data.albums.items
      }
      console.log(results.value)
    }

    return {
      query,
      results,
      search,
      searchType
    }
  }
}
</script>
