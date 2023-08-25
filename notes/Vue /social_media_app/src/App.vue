<template>
  <div>
    <div class="sidenav" v-if="isLogin">
      <side-bar @clearLocalStorage="clearLocalStorage" />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import SideBar from './components/SideBar.vue';

export default {
  components: { SideBar },
  name: "App",
  data() {
    return {
      localStorageItemPresent: true,
    };
  },
  methods: {
    ...mapMutations({
      setLogin: 'setLogin'
    }),
    clearLocalStorage() {

      this.setLogin(false)
      console.log(this.isLogin, 'login');
      localStorage.clear();
      this.localStorageItemPresent = false
      this.$router.push("/login");
    },
    auth() {
      console.log('auth');
      return localStorage.getItem('currentUser') !== null
    }
  },
  computed: {
    ...mapState({
      isLogin: (state) => state.isLogin,
    })
  },
  watch: {

    '$data.localStorageItemPresent': {
      handler(newVal) {
        if (!newVal) {
          // Remove the LocalStorageComponent when item is removed from localStorage
          // this.$refs.localStorageComponent.$destroy();
        }
      },
      immediate: true, // Trigger the watcher immediately on component mount
    },
  },


};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

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



.sidenav-c {
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
  font-size: 28px;
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
