<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      posts: [],
    };
  },
  created: function () { this.indexPosts() },
  methods: {
    indexPosts: function () {
      console.log('getting the data');
      axios.get("/posts.json").then(response => {
        console.log(response.data);
        this.posts = response.data
      })
    }
  }
};

</script>

<template>
  <div class="posts-index">
    <h1>{{ message }}</h1>
    <div v-for="post in posts">
      <p><b>Title : {{ post.title }}</b></p>
      <p> <a v-bind:href="`/posts/${post.id}`">More Detail</a> </p>
      <hr />
    </div>


  </div>
</template>

<style>
</style>