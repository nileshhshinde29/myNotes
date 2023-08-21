<template lang="">
    <div>
        <div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" >
  <div class="card-body">
    <SlotComp v-if="previewImage" @cancelImg=cancelImg >
            <img  :src="previewImage" class="preview" />
    </SlotComp>

    <input class="form-control m-2" ref="myFile" @change="onFileChange" type="file" placeholder="Add image" aria-label="default input example">
    <input class="form-control m-2" type="text"  v-model="data.caption" placeholder="Caption" aria-label="default input example">
    <input class="form-control m-2" type="text" v-model="data.location" placeholder="Location" aria-label="default input example">
    
    <p class="card-text"><button class="btn btn-dark" @click="upload">Add Post</button></p>

  </div>
</div>
    </div>
</template>
<script>
import axios from "axios"
import SlotComp from "./SlotComp.vue"

export default {
    emits: ["updatePosts"],
    components: {
        SlotComp,
    },
    data() {
        return {
            data: {
                file: null,
                caption: "",
                location: "",
            },
            previewImage: null
        }
    },
    methods: {
        cancelImg() {
            console.log('djkljas');
            this.data.file = null
            this.$refs.myFile.value = null
            this.previewImage = null
        },
        onFileChange(event) {
            const file = event.target.files[0];
            this.data.file = file;
            this.previewImage = URL.createObjectURL(file);
        },
        async upload() {
            const formData = new FormData();
            const { file, caption, location } = this.data
            if (file && caption && location) {
                formData.append("image", this.data.file);
                formData.append("caption", this.data.caption);
                formData.append("location", this.data.location);
                await axios.post(`http://localhost:8081/posts/addPost`, formData, {
                    headers: {
                        Authorization: JSON.parse(localStorage.getItem("currentUser")),
                        "Content-Type": "multipart/form-data",
                    },
                })
                    .then((res) => {
                        console.log(res.data);
                        this.$emit('updatePosts', res.data.post)
                        this.$refs.myFile.value = null
                        this.previewImage = null
                        this.data = { file: null, caption: '', location: "" };
                    })
                    .catch((e) => console.log(e));
            }
            else {
                alert("Please fill all mandatory fields")
            }
        },

    }

}
</script>
<style >
.preview {
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    margin: 10px
}
</style>