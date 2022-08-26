<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js show!",
      post: {},
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
        this.post = response.data;
      })
    },
    destroyPost: function () {
      console.log(this.post.id)
      axios.delete(`/posts/${this.post.id}.json`).then((response) => {
        console.log("posts destroy", response);
        this.$router.push("/posts");
      });
    }
  },
};
</script>

<template>
  <div class="posts-show">
    <h1>{{ post.id }}</h1>
    <p>title: {{ post.title }}</p>
    <p>directions: {{ post.body }}</p>
    <a v-bind:href="`/posts/${post.id}/edit`">Edit</a>
    <br>
    <button v-on:click="destroyPost()">Destroy post</button>
  </div>
</template>

<style>
</style>
