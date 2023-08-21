<template lang="">
  



<div>
  <!-- <div class="d-flex justify-content-between">
    <div>
      <div v-for="item in posts" :key="item" class="feedItems">
            <Card :item='item' :user="user"/>
      </div>

    </div>
    <div class="add-post">
      <AddPost @updatePosts=updatePosts />
      <CompositeApiComponent v-if="false"/>
      <CompositeApiComponent2 v-if="false"/>
      <TransiTions/>
    </div>
    
    
  </div> -->
  <coursesView/>
</div>


   

</template>
<script>

import coursesView from './coursesView.vue';
export default {
  name: "dashBoard",
  components: {
    coursesView
  }
}
</script>
<style ></style>