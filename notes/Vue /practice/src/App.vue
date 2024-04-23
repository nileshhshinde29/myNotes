<template>
  <div>
    <h1>{{ name }}</h1>
    <div class="{`${classname? }`}">class</div>
    <div :style="{ color: state1 ? 'red' : 'green', backgroundColor: 'gray' }">
      hello
    </div>
    <div
      v-for="(item1, index) in paginatedProducts"
      :key="index"
      className="card"
    >
      <div>
        <div>
          {{ item1.category }}
        </div>
        <div v-for="(item, index) in users" :key="index">
          <div v-if="item1.id == item.id">{{ item.email }}</div>
        </div>
      </div>
    </div>
    <button @click="prevFunction">prev</button>
    <button
      v-for="(item, index) in totalPageCount"
      :key="index"
      @click="goToPage(index + 1)"
    >
      {{ index + 1 }}
    </button>
    <button @click="nextFunction">next</button>
  </div>
</template>
<script>
export default {
  name: "AppComponent",
  components: {},

  data() {
    return {
      name: "nilesh",
      products: [],
      users: [],
      currentPageNo: 1,
      totalPages: 4,
      state1: true,
    };
  },
  computed: {
    totalPageCount() {
      return Math.ceil(this.products.length / this.totalPages);
    },
    paginatedProducts() {
      let startIndex = (this.currentPageNo - 1) * this.totalPages;
      let endIndex = startIndex + this.totalPages;
      console.log(this.products.slice(startIndex, endIndex));
      return this.products.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.getProducts();
    this.getUsers();
  },

  methods: {
    getProducts() {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => (this.products = json));
    },
    getUsers() {
      fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((json) => (this.users = json));
    },
    prevFunction() {
      if (this.currentPageNo > 1) {
        this.currentPageNo--;
      }
    },
    nextFunction() {
      if (this.currentPageNo < this.totalPageCount) {
        this.currentPageNo++;
      }
    },
    goToPage(page) {
      this.currentPageNo = page;
    },
  },
};
</script>
<style scoped>
.card {
  background-color: rgb(187, 107, 64);
  height: 50px;
  margin-top: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>



<!-- 
   totalPageNo() {
      return Math.ceil(this.products.length / this.totalPages);
    },
    paginatedItems() {
      let startIndex = (this.currentPage - 1) * this.totalPages;
      let endIndex = startIndex + this.totalPages;
      console.log(startIndex, endIndex);
      return this.products.slice(startIndex, endIndex);
    },
 -->