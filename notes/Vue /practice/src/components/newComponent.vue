<template lang="">
    <div>
        <h1>New Component </h1>
    </div>
</template>
<script>
export default {
  name: "thiS",
  beforeUnmount() {
    console.log("bfore unmounted");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
<style lang="">
</style>