<template lang="">
    <div class="sidebar">
        <div>
        <span></span>
        <span></span>
        <span></span>

        </div>
        <div>Menu</div>
                <ul>
                    <li><i class="fas fa-home"></i> <span href="#">Home</span></li>
                    <li><i class="fas fa-tasks"></i> <span href="#">Task</span></li>
                    <li><i class="fas fa-chart-line"></i> <span href="#">Activity</span></li>
                    <li><i class="fas fa-user"></i> <span href="#">User</span></li>
                    <li><i class="fas fa-bell"></i> <span href="#">Notification</span></li>
                    <li><i class="fas fa-cog"></i> <span href="#">Setting</span></li>
                    <li><i class="fas fa-life-ring"></i> <span href="#">Support</span></li>
                    <li><i class="fas fa-sign-out-alt"></i> <span href="#">Logout</span></li>
                </ul>
                <div>Group</div>
                <ul>
                     <li><i class="fas fa-home"></i> <span href="#">Home</span></li>
                    <li><i class="fas fa-tasks"></i> <span href="#">Task</span></li>
                    <li><i class="fas fa-chart-line"></i> <span href="#">Activity</span></li>
                    <li><i class="fas fa-user"></i> <span href="#">User</span></li>
                </ul>
            </div>
</template>
<script>
import './sidebar.css'
export default {
    name: 'SideBar'
}
</script>
<style scoped>
.sidebar div {
    color: white;
    /* float: left; */
    display: flex;
    margin: 20px 0 10px 20px;
    justify-content: start;
    width: 100%;
}

.sidebar div span {
    height: 12px;
    margin-right: 10px;
    width: 12px;
    border-radius: 12px;
    background-color: white;
}

.sidebar div span:nth-child(1) {
    background-color: green;
}

.sidebar div span:nth-child(2) {
    background-color: yellow;
}

.sidebar div span:nth-child(3) {
    background-color: red;
}
</style>