<template>
  <div>
    <div>{{ name }}</div>
    <input v-model="obj.fName" @input="nameCheck" />
    <input v-model="obj.mobile" />
    <select v-model="obj.gender">
      <option value="male">male</option>
      <option value="female">female</option>
    </select>
    radio
    <label> <input type="radio" value="r1" v-model="obj.radio" /> r1</label>
    <label> <input type="radio" value="r2" v-model="obj.radio" /> r2</label>

    checkbox
    <label>
      <input type="checkbox" value="r1" v-model="obj.checkbox" /> r1</label
    >
    <label>
      <input type="checkbox" value="r2" v-model="obj.checkbox" /> r2</label
    >

    <button @click="newMethodToChangeName">submit</button>
    <h1>{{ count }}</h1>
    <button @click="inc">+</button>
    <input ref="myref" />
    <button @click="focuss">focuss</button>
  </div>
</template>
<script>
import mixin from "./mixin";
export default {
  name: "compOne",
  props: ["name"],
  emits: ["changeName"],
  mixins: [mixin],
  data() {
    return {
      obj: {
        fName: "",
        mobile: "",
        gender: "",
        radio: "",
        checkbox: [],
      },
      err: {
        fName: true,
        mobile: true,
        gender: true,
        radio: true,
        checkbox: true,
      },
    };
  },
  watch: {
    "obj.fName": {
      handler(newVal, oldVal) {
        console.log("newVal", newVal, oldVal);
      },
      immediate: true,
      deep: true,
    },
  },

  methods: {
    newMethodToChangeName() {
      console.log(this.err);
    },
    nameCheck() {
      this.err.fName = !this.obj.fName.length > 0;
    },
    focuss() {
      this.$refs.myref.focus();
    },
  },
};
</script>
<style>
</style>