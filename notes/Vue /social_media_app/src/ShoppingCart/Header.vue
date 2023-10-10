<template>
  <div>
    <section class="header d-flex align-items-center justify-content-between">
      <h1>NHS Internationals</h1>
      <span class="d-flex">
        <h6 class="m-4">Home</h6>
        <h6 class="m-4">Categories</h6>
        <h6 class="m-4">Todays Offer</h6>
        <h6 class="m-4">Profile</h6>
      </span>
      <div class="d-cart">
        <span class="">Your Shopping Cart</span>
        <div class="cl">&nbsp;</div>
        <span>Articles: <strong>4</strong></span> &nbsp;&nbsp;
        <span>Cost: <strong>$250.99</strong></span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "HeaDer,",
  data() {
    return {
      showProfileForm: false,
    };
  },
};
</script>
<style>
.header {
  padding-left: 10px;
  width: 100%;
  height: 10vh;
  color: white;
  font-family: "sans-serif";
  font-size: 30px;
  background-color: #8b0000;
}

.d-cart {
  font-size: 12px;
  padding-right: 10px;
}
</style>