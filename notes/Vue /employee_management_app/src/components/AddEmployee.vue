<template lang="">
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 + Add Employee
</button>

<!-- Modal -->
<div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class=" modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div >
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input v-model='name'  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Designation</label>
    <input v-model='designation' ref='nameRef' class="form-control" id="exampleInputPassword1">
  </div>
</form>
    </div>
      </div>
      <div class="modal-footer">
        <button @click="focusss">fucus</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" @click='saveEmployee'  data-bs-dismiss="modal" class="btn btn-primary">Add Employee</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
// import { ref } from "vue";
export default {
  data() {
    return {
      name: "",
      designation: "",
    };
  },
  emits: ["saveEmployee"],
  methods: {
    focusss() {
      this.$refs.nameRef.focus();
    },
    saveEmployee() {
      const newEmp = {
        id: Math.floor(Math.random() * 10000),
        name: this.name,
        designation: this.designation,
      };
      this.$emit("saveEmployee", newEmp);
      (this.name = ""), (this.designation = "");
    },
  },
};
</script>
<style lang="">
</style>