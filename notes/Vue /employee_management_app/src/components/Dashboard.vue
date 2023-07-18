<template lang="">
    <div class='container'>
<nav class="navbar navbar-light" style="background-color: #e3f2fd; height:100px">
  <div class="">
    <div><h3>{{user.companyName}}</h3><h4>{{user.location}}</h4></div>
  </div>
  <div>
    <AddEmployee @saveEmployee='saveEmployee'/>
  </div>
</nav>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th> 
      <th scope="col">Designation</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in employees" :key='index'>
      <th scope="row">{{index+1}}</th>
      <td v-if='edit==item.id'><input placeholder='name' ref="nameRef1" v-model='name'/></td>
      <td v-else >{{item.name}}</td>
      <td v-if='edit==item.id'><input placeholder='designation' v-model='designation'/></td>
      <td v-else>{{item.designation}}</td>
      <td>
        <button v-if="edit==item.id" type="button" class="btn btn-primary btn-sm m-1" @click="SaveEditedFunction(item.id)">Save</button>
        <button v-else type="button" class="btn btn-primary btn-sm m-1" @click="()=>editFunction(item)">Edit</button>
        <button type="button" class="btn btn-danger btn-sm" @click='deleteEmployee(item.id)'>Delete</button>
      </td>
    </tr>
   
  </tbody>
</table>
    </div>
</template>
<script>
import AddEmployee from "./AddEmployee.vue";
export default {
  name: "dashBoard",
  components: {
    AddEmployee,
  },
  data() {
    return {
      user: {},
      edit: false,
      name: "",
      designation: "",
      employees: [
        { id: 1, name: "Shrikant Nale", designation: "Sr.Developer" },
      ],
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.user = user;
  },
  methods: {
    saveEmployee(data) {
      this.employees.push(data);
    },
    deleteEmployee(id) {
      this.employees = this.employees.filter((item) => item.id !== id);
    },
    editFunction(item) {
      const { name, designation, id } = item;
      this.edit = id;
      //   let names = `nameRef${id}`;
      (this.name = name), (this.designation = designation);
    },
    SaveEditedFunction(id) {
      const newObj = {
        id: id,
        name: this.name,
        designation: this.designation,
      };
      this.edit = false;

      this.employees = this.employees.map((item) =>
        item.id === id ? newObj : item
      );
    },
  },
};
</script>
<style lang="">
</style>