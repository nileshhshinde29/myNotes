<template>
  <div>
    <Component1 :data="data" />
  </div>
</template>
<script>
import Component from "./components/comp1.vue";
export default {
  name: "App",
  components: {
    Component1: Component,
  },
  data() {
    return {
      data: [],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => (this.data = res))
        .catch((e) => console.log(e));
    },
  },
};
</script>
<style>
</style>








<!-- <template lang="">
  <input v-model="searchStr"/>
  <div v-for="(item, index) in  paginationData" :key="index">
    {{item.title}}
  </div>
  <button @click=Prev>Prev</button>
  <span v-for="(item,index) in totalNoOfPages" :key="index">
  <button @click="()=>pageNo=index" :style="{backgroundColor:pageNo==index? 'red':''}">{{index+1}}</button>
  </span>
  <button @click="Next">Next</button>

</template>
<script>
export default {
  name: "App",
  data() {
    return {
      products: [],
      users: [],
      pageNo: 0,
      displayNoItems: 3,
      searchStr: "",
    };
  },

  updated() {
    console.log(this.searchStr);
  },
  mounted() {
    this.getProducts();
    console.log(this.product);
  },

  computed: {
    paginationData() {
      let start = this.pageNo * this.displayNoItems;
      let end = start + this.displayNoItems;

      return this.products
        .filter((item) => item.title.includes(this.searchStr))
        .slice(start, end);
    },
    totalNoOfPages() {
      return Math.ceil(
        this.products.filter((item) => item.title.includes(this.searchStr))
          .length / this.displayNoItems
      );
    },
  },

  methods: {
    async getProducts() {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => (this.products = json));
    },
    getUsers() {
      fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((json) => (this.users = json));
    },

    Prev() {
      if (this.pageNo > 0) {
        this.pageNo = this.pageNo - 1;
      }
    },
    Next() {
      if (this.pageNo < this.totalNoOfPages - 1) {
        this.pageNo = this.pageNo + 1;
      }
    },
  },
};
</script>
<style lang="">
</style> -->