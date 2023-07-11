<template>
  <button>{{ name }}</button>
</template>

<script>
export default {
  name: "BuTton",
  props: {
    name: {
      default: "btn1",
    },
  },
};
</script>
<style>
</style>
