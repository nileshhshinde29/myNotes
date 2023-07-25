<template lang="">
  

<div class="sidenav">
    <span href="#about"> <font-awesome-icon icon="house" /> &nbsp; Home</span>
    <span href="#services"><font-awesome-icon icon="magnifying-glass" /> &nbsp; Search</span>
    <span href="#clients"><font-awesome-icon icon="paper-plane" /> &nbsp; Explore</span>
    <span href="#contact"><font-awesome-icon icon="film" /> &nbsp; Reels</span>
    <span href="#contact"><font-awesome-icon icon="message" /> &nbsp; Messages</span>
    <span href="#contact"><font-awesome-icon icon="bell" /> &nbsp; Notifications</span>
    <span href="#contact"><font-awesome-icon icon="video" /> &nbsp; Create</span>
    <span href="#contact"><font-awesome-icon icon="user" /> &nbsp; Profile</span>
    <span href="#contact" @click="clearLocalStorage"> Logout</span>
</div>

<div class="main">
  <div class="d-flex justify-content-between">
    <div>
      <div v-for="item in posts" :key="item" class="feedItems">
            <Card :item='item' :user="user"/>
      </div>
    </div>
    <div class="add-post">
      <AddPost @updatePosts=updatePosts />
    </div>
  </div>

</div>


   

</template>
<script>
import AddPost from "./AddPost.vue"
import Card from "./Card";
import axios from "axios";
export default {
  name: "dashBoard",
  components: {
    Card,
    AddPost,
  },
  data() {
    return {
      posts: [],
      user: ""
    };
  },

  created() {
    this.getUser()
    this.getPosts();
  },
  methods: {

    getUser() {
      axios.get(`http://localhost:8081/posts/self`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("currentUser")),
        },
      })
        .then((res) => {
          this.user = res.data.user;
          console.log(this.user)
        })
        .catch((e) => console.log(e));
    },

    clearLocalStorage() {
      localStorage.clear();
      this.$router.push("/login");
    },
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
    updatePosts(post) {
      this.posts.unshift(post)
      console.log('p', post);
    }
  },
};
</script>
<style >
.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 100px;
}



.sidenav span {
  padding: 8px 8px 8px 50px;
  margin: 20px 0 10px 0;
  text-decoration: none;
  font-size: 16px;
  color: #818181;
  display: block;
}

.add-post {
  height: 600px;
  width: 600px;
  /* background-color: red; */
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: aliceblue;
  overflow-x: hidden;
  padding-top: 100px;
}

.sidenav span:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 250px;
  /* Same as the width of the sidenav */
  font-size: 28px;
  /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }

  .sidenav span {
    font-size: 1px;
  }
}

.feedItems {
  margin-right: auto;
  margin-left: 20%;
}
</style>