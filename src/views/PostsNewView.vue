<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newPostsParams: {},
      errors: [],
    };
  },
  created: function () { },
  methods: {
    PostsNew: function () {
      axios
        .post("/posts.json", this.newPostsParams)
        .then((response) => {
          console.log("posts create", response);
          this.$router.push("/posts");
        })
        .catch((error) => {
          console.log("posts create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="posts-new">
    <h1>Make a New Post</h1>
    <form v-on:submit.prevent="PostsNew()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newPostsParams.title" />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" v-model="newPostsParams.body" />
      </div>

      <input type="submit" value="Create" />

    </form>
  </div>
</template>