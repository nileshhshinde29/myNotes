<template>
  <div class="hello">
    <h6>{{ msg }}</h6>
    <button @click="() => navTo('/home')">Form with validation</button>
    <button @click="() => navTo('/mixins')">Mixins</button>
    <button @click="() => navTo('/vuex')">Vuex</button>
    <button @click="() => navTo('/next-tick')">nextTick Method</button>

    <!-- <button></button> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      router: useRoute,
    };
  },
  methods: {
    navTo(path) {
      this.$router.push(path);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
