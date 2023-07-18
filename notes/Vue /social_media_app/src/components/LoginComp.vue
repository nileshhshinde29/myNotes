<template >
  <div class="outer-container">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="login">
        Submit
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LoginComponent",
  data() {
    return {
      password: "",
      email: "",
    };
  },
  methods: {
    login(event) {
      axios
        .post("http://localhost:8081/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem("currentUser", JSON.stringify(res.data.token));
          this.$router.push("/dashboard");
        })
        .catch((e) => console.log(e));
      event.preventDefault();
      console.log(this.email, this.password);
    },
  },
};
</script>
<style>
.outer-container {
  width: 500px;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 10px;
  margin: 100px auto 0 auto;
}
</style>