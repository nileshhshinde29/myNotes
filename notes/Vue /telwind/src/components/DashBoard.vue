<template>
    <div>
        <header class="sticky-header">
            <!-- Your sticky header content goes here -->
            <button @click="toggleSidebar" class="sidebar-toggle-button">
                <i class="fas fa-bars"></i>
            </button>

            Sticky Header
        </header>
        <div class="sidenav" :class="{ 'sidenav-open': showSidebar, 'sidenav-close': !showSidebar }">
            <!-- Sidebar content -->
            <ul>
                <li>Home</li>
                <li>Dashboard</li>
                <li>About</li>
                <li>documentation</li>
                <li>Information</li>
                <li>Logout</li>
            </ul>
        </div>
        <div class="main">
            <!-- Main content -->
            MainContent
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showSidebar: false
        };
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        }
    }

}
</script>

<style scoped>
.sticky-header {

    position: fixed;
    width: 100%;
    top: 0;
    background-color: #333;
    /* Customize the background color as needed */
    color: #fff;
    /* Customize the text color as needed */
    padding: 10px 0;
    /* Adjust the padding as needed */
    text-align: center;
    /* Center align the content within the header */
    z-index: 100;
    /* Ensure the header is above the sidebar */
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

.sidenav span:hover {
    color: #f1f1f1;
}

.main {
    margin-left: 250px;
    font-size: 28px;
    padding: 0px 10px;
}

.sidebar-toggle-button {
    display: none;
    /* Initially hide the sidebar toggle button */
}

@media screen and (max-width: 768px) {
    .sticky-header {
        display: flex;
        justify-content: space-between;
    }

    .main {
        margin-left: 0px;
    }

    .sidenav {
        width: 70%;
        height: 100%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: -100%;
        /* Hide sidebar off-screen */
        background-color: #111;
        overflow-x: hidden;
        padding-top: 100px;
    }

    .sidenav.sidenav-open {
        left: 0;
        transition: left 0.3s ease-in;
        /* Slide in sidebar when open */
    }

    .sidenav.sidenav-close {
        /* left: 0; */
        transition: left 0.3s ease-in;
        /* Slide in sidebar when open */
    }

    .close-sidebar-button,
    .sidebar-toggle-button {
        display: block;
        /* Show toggle buttons on small screens */
        color: #fff;
        background-color: #333;
        border: none;
        cursor: pointer;
        padding: 10px 15px;
        text-align: center;
    }
}
</style>
