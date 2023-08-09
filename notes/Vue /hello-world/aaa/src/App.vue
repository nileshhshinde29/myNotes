<template>
  <div>
    <!--  <div>{{ name }}{{ mobile }}</div>
  <div v-text="mobile"></div>
import ThisNext from './components/ThisNext.vue';
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

  <div v-bind:style="[baseStyleObject, successStyleObject]"> style</div> -->
    <h2 v-if="num === 0">The number is zero</h2>
    <h2 v-else-if="num > 0">The number is positive</h2>
    <h2 v-else-if="num < 0">The number is negative</h2>
    <h2 v-else>The number is not number</h2>
    <h2 v-show="show">Show using v-show</h2>
    <div v-for="(item, index) in names" :key="index">{{ item }}</div>
    <h2 v-for="(value, key, index) in myInfo" :key="value">
      {{ index }} {{ key }} {{ value }}
    </h2>
    <h2></h2>
    <h2></h2>
    <div></div>
    <CompositionApi />
    <CompForMixins />
    <ThisNext />
    <Filter />

  </div>
</template>

<script>
import CompForMixins from './components/CompForMixins.vue';
import CompositionApi from './components/CompositionApi.vue';
import ThisNext from './components/This.$nextTrick.vue'
import Filter from './components/filter.vue';
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    CompositionApi,
    CompForMixins,
    ThisNext,
    Filter,
  },
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
      num: -1,
      names: ["nilesh", "shrikant", "akshay"],
      myInfo: {
        name: "nilesh",
        lastName: "shinde",
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
