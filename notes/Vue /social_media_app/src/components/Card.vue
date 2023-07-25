<template lang="">
    
  <div>
        <div class="card" style="width: 32rem;">
        <div class="container upperCard">
          <div class="row d-flex justify-content-lg-start">
        <div class="col-1 d-flex align-items-start mt-1 justify-content-center">
          <img :src="`http://localhost:8081/${items.image}`"  class="roundImage" alt="asd">
        </div>
            <div class="col-10 d-flex align-items-center" >
      <div class="input-group d-block" >
          <div class="username">{{items.user?.username}}</div>
          <div class="location">{{items.location}}</div>
      </div>
          </div>
          </div>
    </div>
        <img :src="`http://localhost:8081/${items.image}`"  class="displayImage card-img-top" alt="asd">
            <div class="card-body">
            <div class="text-center">
    </div>
    <div>
      <div class="row">
        <div class="iconsLeft col-4">
                <div><font-awesome-icon v-if="items.likes?.includes(user)" icon="heart" style="color:red" @click="likePost(items._id)" /><font-awesome-icon v-else icon="fa-regular fa-heart"  @click="likePost(items._id)"/></div>
               <div ><font-awesome-icon icon="comment-dots" /></div>
               <div><font-awesome-icon icon="paper-plane" /></div>
        </div>
        <div class="iconSave col-8">
          <div><font-awesome-icon icon="fa-regular fa-bookmark" /></div>
        </div>
      </div>
    </div>
    <div class="textSize">{{items.caption}}</div>
    <div class="textSize">view all 13 comments</div>
   <div class="container">
     <div class="row d-flex justify-content-lg-between">
        <div class="col-1 d-flex align-items-center justify-content-center">
          <img :src="`http://localhost:8081/${items.image}`"  class="roundImage" alt="asd">
          <!-- <font-awesome-icon class="zoom-in-zoom-out" icon="heart" style="color:red" /> -->
        </div>
      <div class="col-10 d-flex align-items-center" >
      <div class="input-group" >
        <input type="text" class="form-control" placeholder="Add a comment...">
      </div>
    </div>
  </div>
</div>

  </div>
</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "CaRd",
  props: ["item", "user"],
  data() {
    return {
      items: '',
      likes: true,
    }
  },
  mounted() {
    this.items = this.item
  },

  methods: {

    likePost(id) {

      console.log(this.items)
      axios
        .put(`http://localhost:8081/posts/like/${id}`, {},
          {
            headers: {
              Authorization: JSON.parse(localStorage.getItem("currentUser")),
            },
          })
        .then(() => {
          if (this.items.likes.includes(this.user)) {
            let item = this.items
            item.likes = item.likes.filter(item => item !== this.user)
            this.items = item
          }
          else {
            this.items.likes.push(this.user)
          }
        })
        .catch((e) => console.log(e));
    },
  }
};
</script>
<style >
.roundImage {
  border-radius: 12.5px;
  height: 25px;
  width: 25px;
}

.textSize {
  font-size: 12px;
}

.iconsLeft {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.iconSave {
  display: flex;
  justify-content: end;
}

.upperCard {
  margin: 10px 0 10px 5px;
}

.username {
  font-size: 14px;
}

.displayImage {
  max-height: 500px;
}

.location {
  font-size: 10px;
}
</style>