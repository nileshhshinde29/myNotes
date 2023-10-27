<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Column Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>
            <button @click="$router.push(item.path)">
              {{ item.columnValue }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        { columnValue: "Router Component", path: "/RouterComponent" },
        { columnValue: "Row 2 Data", path: "/" },
        { columnValue: "Row 3 Data", path: "/" },
        // Add more items as needed
      ],
    };
  },
  components: {},
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
