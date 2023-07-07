<template>
  <div>{{ name }}{{ mobile }}</div>
  <div v-text="mobile"></div>
  <div v-html="address"></div>
  <div v-bind:id="id"></div>
  <button v-bind:disabled="disabled">button</button>
  <div class="underline">underlined text</div>
  <div v-bind:class="status">danger text</div>
  <div v-bind:class="!show && 'display'">display</div>
  <div v-bind:class="!show ? 'danger' : 'green'">conditional class</div>
  <div v-bind:class="['green', 'bold']">green text</div>
  <h2 v-bind:class="{ green: show, bold: !disabled }">
    Object conditional movie
  </h2>
  <h2
    v-bind:style="{
      color: 'blue',
      fontSize: headerSize + 'px',
      padding: '20px',
    }"
  >
    Inline Style
  </h2>

  <div v-bind:style="[baseStyleObject, successStyleObject]">style</div>
  <div></div>
  <div></div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      name: "Nilesh",
      address: "<b>Haripur</b>",
      mobile: "9623273435",
      id: "12234",
      disabled: false,
      status: "danger",
      show: true,
      headerSize: 10,
      baseStyleObject: {
        fontSize: "50px",
        padding: "10px",
      },
      successStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid green",
      },
    };
  },
};
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
.underline {
  text-decoration: underline;
}
.danger {
  color: red;
}
.display {
  display: none;
}
.green {
  color: green;
}
.bold {
  font-weight: bolder;
}
</style>
