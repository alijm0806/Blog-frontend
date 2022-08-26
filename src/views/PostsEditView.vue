<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js show!",
      post: {}
    };
  },
  created: function () {
    this.showPost();
  },
  methods: {
    showPost: function () {
      console.log('in show posts')
      console.log(this.$route.params.id)
      axios.get("/posts/" + this.$route.params.id + ".json").then(response => {
        console.log(response.data);
        this.posts = response.data;
      })
    },
    updatePost: function () {

      console.log('updating post...')
      console.log(this.post.id)
      axios.patch(`/posts/${this.posts.id}.json`, this.post).then(response => {
        console.log(response.data);
        this.$router.push(`/posts/${this.posts.id}`);
      })
    }
  },
};
</script>

<template>
  <div class="posts-edit">
    <h1>{{ post.id }}</h1>
    <p><b>Title: <input type="text" v-model="post.title" /></b></p>
    <p><b>Body: <input type="text" v-model="post.body" /></b></p>

    <button v-on:click="updatePost()">Update</button>
  </div>
</template>

<style>
</style>