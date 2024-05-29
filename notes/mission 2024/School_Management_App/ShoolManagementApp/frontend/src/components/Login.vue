<template lang="">
    <v-sheet class="mx-auto pa-10" width="600" color="#f0f0f0">
    <v-form ref="form" @submit.prevent="submit" >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        variant="solo"
      ></v-text-field>
       <v-text-field
        v-model="password"
        type="password"
        :rules="passwordRules"
        label="Password"
        variant="solo"
      ></v-text-field>
      <v-btn color='orange' class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
import axios from "axios";

export default {
  name: "LoginComponent",
  data: () => ({
    email: "",
    password: "",
    emailRules: [
      (value) => {
        if (value) return true;
        return "You must enter a email.";
      },
    ],
    passwordRules: [
      (value) => {
        if (value) return true;
        return "You must enter a password.";
      },
    ],
  }),
  methods: {
    async submit() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        let data = {
          email: this.email,
          password: this.password,
        };
        await axios
          .post("http://localhost:8080/user/login", data)
          .then((res) => {
            localStorage.setItem("accessToken", JSON.stringify(res.data));
            this.$router.push("/home");
          })
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>
<style lang="">
</style>