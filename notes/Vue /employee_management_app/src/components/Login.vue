<template lang="">
    <div class='mainDiv'>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Company Name</label>
    <input v-model='companyName'  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Location</label>
    <input v-model='location' class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input v-model='register' type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" @click='createCompany'>Submit</button>
</form>
    </div>
       
</template>
<script>
export default {
  name: "LogIn",
  data() {
    return {
      companyName: "",
      location: "",
      register: false,
    };
  },
  methods: {
    createCompany(event) {
      event.preventDefault();
      console.log(this.companyName, this.location, this.register);
      const obj = {
        companyName: this.companyName,
        location: this.location,
        register: this.register,
      };
      localStorage.setItem("user", JSON.stringify(obj));
      this.$router.push("/dashboard");
    },
  },
};
</script>
<style>
.mainDiv {
  width: 500px;
  margin: 20px auto 20px auto;
  border: 1px solid gray;
  padding: 50px;
  border-radius: 10px;
}
</style>