<template>
  <h1>hello {{ title }}</h1>
</template>
    
<script>
export default {
  name: "MainHeader",
  props: {
    title: {
      default: "hello world",
    },
  },
};
</script>

<style>
</style>
