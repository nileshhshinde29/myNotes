<template>
  <div>
    <input placeholder="Search" v-model="searchStr" />
    <div v-for="item in displayItems" :key="item">
      <div class="myClass">
        <div>{{ item.title }}</div>
        <div>{{ item.description }}</div>
        <div>{{ item.price }}</div>
      </div>
    </div>
    <div>
      <button
        @click="
          () => {
            if (pageNo > 0) {
              pageNo--;
            }
          }
        "
      >
        Prev
      </button>

      <button
        v-for="(item, index) in totalPageNo"
        :key="index"
        @click="
          () => {
            pageNo = index;
          }
        "
        :style="pageNo == index ? 'background-color: red' : ''"
      >
        {{ index + 1 }}
      </button>

      <button @click="next">next</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "myComponent",
  props: ["data"],
  data() {
    return {
      mainData: [],
      pageNo: 0,
      totalDisplayItems: 3,
      searchStr: "",
    };
  },
  watch: {
    data() {
      this.mainData = this.data;
    },
  },

  computed: {
    displayItems() {
      let start = this.pageNo * this.totalDisplayItems;
      let end = start + this.totalDisplayItems;
      return this.mainData
        .filter((item) => item.title.includes(this.searchStr))
        .slice(start, end);
    },

    totalPageNo() {
      return Math.ceil(
        this.mainData?.filter((item) => item.title.includes(this.searchStr))
          .length / this.totalDisplayItems
      );
    },
  },

  methods: {
    next() {
      if (this.pageNo < this.totalPageNo - 1) {
        this.pageNo++;
      }
    },
  },
};
</script>
<style scoped>
.myClass {
  margin: 20px;
  background-color: violet;
  padding: 10px;
}
</style>