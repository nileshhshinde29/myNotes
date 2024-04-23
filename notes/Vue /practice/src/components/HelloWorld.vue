<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="changeMessage">update message</button>
    <button @click="() => (this.showComp = !showComp)">update message</button>
    <newComponent v-if="showComp" />
  </div>
</template>

<script>
import newComponent from "./newComponent.vue";

export default {
  name: "HelloWorld",
  components: {
    newComponent: newComponent,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      message: "hello",
      showComp: true,
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeupdated");
  },
  updated() {
    console.log("update");
  },

  methods: {
    changeMessage() {
      this.message = "i am changed message";
    },
  },
};
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
