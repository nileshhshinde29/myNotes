<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <button @click="openHelloWorldForm = !openHelloWorldForm">
      {{
        openHelloWorldForm ? "Close Hello World Form" : "Open Hello World Form"
      }}
    </button>
    <button @click="openForm = !openForm">
      {{ openForm ? "Close Validated Form" : "Open Validated Form" }}
    </button>
    <p></p>
    <SecondForm v-if="openForm" />
    <HelloWorld
      v-if="openHelloWorldForm"
      :msg="msg"
      :books="books"
      :increasePages="increasePages"
      @increasePagesByEmit="increasePagesByEmit"
      @incByPayLoad="incByPayLoad"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SecondForm from "./components/SecondForm.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    SecondForm,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js + TypeScript App",
      books: {
        name: "Mritunjay",
        author: "Shivaji Sawant",
        pages: 578,
      },
      openHelloWorldForm: false,
      openForm: false,
    };
  },
  methods: {
    increasePages() {
      this.books.pages += 1;
    },
    increasePagesByEmit() {
      this.books.pages += 2;
    },
    incByPayLoad(num: number) {
      this.books.pages = this.books.pages + num;
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
