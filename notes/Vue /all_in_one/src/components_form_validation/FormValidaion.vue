<template>
  <div>
    <input placeholder="Name" /><br />
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <br />

    <div>
      <h5>Gender</h5>
      <input type="checkbox" id="male" /><label for="male">Male</label>
      <input type="checkbox" id="female" /><label for="female">Female</label>
    </div>
    <div>
      <h5>Gender</h5>
      <input type="radio" v-model="hobbes" id="1" value="Playing cricket" />
      <label for="1">Playing cricket</label>
      <input type="radio" v-model="hobbes" id="2" value="Watching movie" />
      <label for="2">Watching Movies</label>
      <input type="radio" v-model="hobbes" id="3" value="Reading books" />
      <label for="3">Reading Books</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      hobbes: "",
    };
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
