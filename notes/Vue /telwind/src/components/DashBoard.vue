<template>
    <div>
        <header ref="headerRef" class="sticky-header">
            <Header @toggleSidebar="toggleSidebar" />
            <!-- <button @click="toggleSidebar" class="sidebar-toggle-button">
                <i class="fas fa-bars"></i>
            </button>
            <img src="../assets/NHSLogo.png" class="logo" />
            Sticky Header -->
        </header>
        <div ref="sidebar" class="sidenav" :class="{ 'sidenav-open': showSidebar, 'sidenav-close': !showSidebar }">
            <Sidebar />
        </div>
        <div class="main">
            <!-- Main content -->
            MainContent
        </div>
    </div>
</template>

<script>
import './dashboard.css'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
export default {
    components: {
        Sidebar,
        Header,
    },
    data() {
        return {
            showSidebar: false
        };
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        },
        updateSidebarMargin() {
            this.$nextTick(() => {
                const header = this.$refs.headerRef
                const sidebar = this.$refs.sidebar;
                const headerHeight = header.clientHeight;
                sidebar.style.marginTop = `${headerHeight}px`;
            })
        },
    },
    mounted() {
        this.updateSidebarMargin();
    },
    updated() {
        this.updateSidebarMargin();
    },


}
</script>

<style scoped></style>
