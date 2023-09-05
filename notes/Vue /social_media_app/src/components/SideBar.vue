<template>
    <div>

        <router-link class="sidenav-c" to="/dashboard/"> <font-awesome-icon icon="house" /> &nbsp;Notes</router-link>
        <router-link class="sidenav-c" to="/social-media"><font-awesome-icon icon="magnifying-glass" /> &nbsp;Social
            Media</router-link>
        <router-link class="sidenav-c" to="#clients"><font-awesome-icon icon="paper-plane" />&nbsp;Explore</router-link>
        <router-link class="sidenav-c" to="#contact"><font-awesome-icon icon="film" /> &nbsp; Reels</router-link>
        <router-link class="sidenav-c" to="#contact"><font-awesome-icon icon="message" /> &nbsp; Messages</router-link>
        <router-link class="sidenav-c" to="#contact"><font-awesome-icon icon="bell" /> &nbsp;Notifications</router-link>
        <router-link class="sidenav-c" to="#contact"><font-awesome-icon icon="video" /> &nbsp; Create</router-link>
        <router-link class="sidenav-c" to="#contact"><font-awesome-icon icon="user" /> &nbsp; Profile</router-link>
        <router-link class="sidenav-c" to="#contact" @click="$emit('clearLocalStorage')"> Logout</router-link>

    </div>
</template>

<script>

export default {
    name: "SideBar",
    emits: ['clearLocalStorage'],
};
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
}

.sidenav {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 100px;
}



.sidenav-c {
    padding: 8px 8px 8px 50px;
    margin: 20px 0 10px 0;
    text-decoration: none;
    font-size: 16px;
    color: #818181;
    display: block;
}

.add-post {
    height: 600px;
    width: 600px;
    /* background-color: red; */
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: aliceblue;
    overflow-x: hidden;
    padding-top: 100px;
}

.sidenav span:hover {
    color: #f1f1f1;
}

.main {
    margin-left: 250px;
    /* Same as the width of the sidenav */
    font-size: 28px;
    /* Increased text to enable scrolling */
    padding: 0px 10px;
}

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav span {
        font-size: 1px;
    }
}

.feedItems {
    margin-right: auto;
    margin-left: 20%;
}
</style>
