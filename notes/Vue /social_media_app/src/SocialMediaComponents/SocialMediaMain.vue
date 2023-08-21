<template >
    <div class="d-flex justify-content-between">
        <div>
            <div v-for="item in posts" :key="item" class="feedItems">
                <Card :item='item' :user="user" />
            </div>

        </div>
        <div class="add-post">
            <AddPost @updatePosts=updatePosts />
            <!-- <CompositeApiComponent v-if="false"/> -->
            <!-- <CompositeApiComponent2 v-if="false"/> -->
            <TransiTions />
        </div>


    </div>
</template>
<script>
import axios from "axios";
import Card from "./Card";
import AddPost from "./AddPost.vue"
/* import AddPost from "./AddPost.vue"
import Card from "./Card";
import CompositeApiComponent from './CompositeApiComponent.vue'
import CompositeApiComponent2 from './CompositeApiComponent2.vue'
import TransiTions from './TransiTions.vue' */
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    components: {
        Card,
        AddPost,
        /*  Card,
         AddPost,
         CompositeApiComponent,
         CompositeApiComponent2,
         TransiTions, */

    },
    data() {
        return {
            posts: [],
            user: ""
        };
    },
    computed: {
        ...mapState({
            name: (state) => state.name
        })
    },
    created() {
        this.getUser()
        this.getPosts();
        this.setNameAfterTimeout('shinde')
    },
    methods: {
        ...mapMutations({
            setName: 'setName',

        }),
        ...mapActions({
            setNameAfterTimeout: 'setNameAfterTimeout'
        }),

        getUser() {
            axios.get(`http://localhost:8081/posts/self`, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("currentUser")),
                },
            })
                .then((res) => {
                    this.user = res.data.user;
                })
                .catch((e) => console.log(e));
        },

        clearLocalStorage() {
            localStorage.clear();
            this.$router.push("/login");
        },
        getPosts() {
            axios
                .get("http://localhost:8081/posts/allPosts", {
                    headers: {
                        Authorization: JSON.parse(localStorage.getItem("currentUser")),
                    },
                })
                .then((res) => (this.posts = res.data.message))
                .catch((e) => console.log(e));
        },
        updatePosts(post) {
            this.posts.unshift(post)
            console.log('p', post);
        }
    },
};
</script>
<style ></style>