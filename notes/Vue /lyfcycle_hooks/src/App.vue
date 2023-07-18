<template>
  <div class="hello">
    <HelloWorld v-if="showComp" />
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
    <button @click="hideHelloWorld">Hide hello world component</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  props: {
    msg: String
  },
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: "Hello, Vue!",
      showComp: true
    };
  },
  methods: {
    hideHelloWorld() {
      this.showComp = !this.showComp
    },
    changeMessage() {
      this.message = "new message"
    }
  },
  beforeCreate() {
    console.log("beforeCreate hook");
  },
  created() {
    console.log("created hook");
  },
  beforeMount() {
    console.log("beforeMount hook");
  },
  mounted() {
    console.log("mounted hook");
  },
  beforeUpdate() {
    console.log("beforeUpdate hook");
  },
  updated() {
    console.log("updated hook");
  },
  // beforeUnmount() { // Only available in Vue 3
  //   console.log("beforeUnmount hook");
  // },
  // unmounted() { // Only available in Vue 3
  //   console.log("unmounted hook");
  // },
  /* beforeDestroy() { // Only available in Vue 2
    console.log("beforeDestroy hook");
  },
  destroyed() { // Only available in Vue 2
    console.log("destroyed hook");
  },
  errorCaptured(err, vm, info) { // Only available in Vue 2
    console.error("errorCaptured hook", err, vm, info);
  }, */
}
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
