<template>
  <div class="container">
    <Header v-if="showHeader" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Header: Header },
  data() {
    return {
      showHeader: false,
    };
  },

  methods: {
    auth() {
      let token = localStorage.getItem("accessToken");
      if (token) {
        this.showHeader = true;
      }
    },
  },

  watch: {
    $route: "auth",
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-rows: auto 1fr; /* Header will take its natural height, and router-view will take the remaining space */
}
</style>
