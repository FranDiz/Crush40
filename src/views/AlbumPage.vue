<template>
    <section class="product-page">
        <h1>Product Page</h1>
        <p>{{ this.$route.params.id }}</p>
    </section>
</template>

<script>
import axios from 'axios';


export default {
    data() {
    return {
      product: null, 
      searchUrl: `https://api.spotify.com/v1/albums/${this.$route.params.id}/tracks`
    };
  },
  created() {
    async function fetchData() {
        const response = await axios.get(searchUrl, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });
        product = response.data;
    }
    fetchData();
    console.log(this.product);
  }
}
</script>

<style>

</style>