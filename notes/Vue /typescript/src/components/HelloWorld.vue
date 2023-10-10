<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input placeholder="email" v-model="email" @input="checkEmail" /> <br />
    <input placeholder="mobile" v-model="mobile" @input="checkMobile" />
    <h6 v-if="emailError">Please enter valid emailId</h6>
    <h6 v-if="mobileError">Please enter valid mobile no</h6>
    <h5>{{ books?.author }}</h5>
    <h6>{{ books?.pages }}</h6>
    <button @click="increasePages()">inc pages</button>
    <button @click="$emit('increasePagesByEmit', 123)">inc pagess</button>
    <button @click="$emit('incByPayLoad', 10)">Inc By Payload</button>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
interface book {
  name: "";
  author?: "";
  pages?: "";
}
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
    books: { type: Object as PropType<book> },
    increasePages: { type: Function as PropType<any> | undefined },
    callback: {
      type: Function as PropType<(id: number) => void>,
      required: true,
    },
  },
  emits: {
    nonValidateFunction: null,
    increasePagesByEmit(payload: number) {
      return 1;
    },
    incByPayLoad(num: number) {
      return num;
    },
  },
  data() {
    return {
      name: "Nilesh",
      mobile: "",
      email: "",
      emailError: false,
      mobileError: false,
    };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
    checkMobile() {
      this.mobileError = !this.mobile
        .split("")
        .every((char) => /^[0-9]/.test(char));
    },
    checkEmail() {
      this.emailError = !this.email
        .split("")
        .every((char) => /[a-zA-z0-9]/.test(char));
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h6 {
  color: red;
}
</style>
