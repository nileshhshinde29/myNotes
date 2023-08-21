<template>
    <div>
        <div class="header">Courses</div>
        <div class="outerCard">
            <div class="card w-25 crd text-center" v-for="item in courses" :key="item"
                @click="$router.push(`display-points${item._id}`)">
                {{ item.courseName }}</div>
        </div>
        <router-view />

    </div>
</template> 
<script>
import axios from 'axios'
export default {
    data() {
        return {
            courses: []
        }
    },
    mounted() {
        this.getCourses()
    },
    methods: {
        async getCourses() {
            await axios
                .get("http://localhost:8081/courses/getCourse",
                    {
                        headers: {
                            Authorization: JSON.parse(localStorage.getItem("currentUser")),
                        }
                    })
                .then((res) => {
                    this.courses = res.data
                })
                .catch((e) => console.log(e));
        },
    }
}


</script>

<style scoped>
.crd {
    height: 200px;
    margin: 20px;
    background-color: rgb(36, 35, 35);
    color: white;
}

.outerCard {
    display: flex;
}

.header {
    background-color: rgb(2, 2, 2);
    color: white;
    padding: 20px;
}
</style>