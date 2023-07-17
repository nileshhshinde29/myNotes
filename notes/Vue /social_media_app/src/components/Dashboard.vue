<template lang="">
    <div>
        <div class="container">
  <div class="row">
    <div class="col-2">
      Column
    </div>
    <div class="col-10">
        <div v-for="item in posts" :key="item">
            <Card :item='item'/>
        </div>
    </div>
  </div>
</div>
       
    </div>
</template>
<script>
import Card from "./Card";
import axios from "axios";
export default {
  name: "dashBoard",
  components: {
    Card,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get("http://localhost:8081/posts/allPosts", {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("currentUser")),
          },
        })
        .then((res) => (this.posts = res.data.message))
        .catch((e) => console.log(e));
    },
  },
};
</script>
<style lang="">
</style>