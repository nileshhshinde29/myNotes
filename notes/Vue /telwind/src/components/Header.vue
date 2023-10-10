<template lang="">
    <div class="grid-container">
        <div class="item0">
            <button @click="$emit('toggleSidebar')" class="sidebar-toggle-button">
                <i class="fas fa-bars"></i>
            </button>
        </div>
  <div class="item1"> 
    <img src="../assets/NhsLogo.png" class="logo"/>
    
</div>
  <div class="item3">
     <span>About</span>
     <span>Courses</span>
     <span>Pages</span>
     <span>Contact</span>
  </div>  
  <!-- <div class="item4">right</div> -->
<div class="item2"><img src="../assets/BlankUser.png" class="profile" /></div>
  
</div>

        <!--<button @click="$emit('toggleSidebar')" class="sidebar-toggle-button">
                <i class="fas fa-bars"></i>
            </button> -->
</template>
<script>
export default {
  name: "HeaDer",
  emits: ["toggleSidebar"],
  data() {
    return {
      showSidebar: false,
    };
  },
};
</script>
<style >
.item0 {
  display: none;
  grid-area: menuButton;
}
.item1 {
  grid-area: logo;
}

.item2 {
  grid-area: menu;
}

.item3 {
  grid-area: main;
}

.item3 > span {
  float: left;
  margin: 0 20px 0 20px;
}

.item4 {
  grid-area: right;
}

.grid-container {
  display: grid;
  align-items: center;
  grid-template-areas: "logo main main main right menu";
  gap: 5px;
  /* background-color: #2196F3; */
  /* padding: 10px; */
}

.grid-container > div {
  /* background-color: rgba(255, 255, 255, 0.8); */
  text-align: center;

  /* padding: 20px 0; */
  /* font-size: 30px; */
}

.logo {
  height: 50px;
  width: 180px;
  margin-left: 20px;
}

.profile {
  float: right;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin-right: 30px;
}

@media screen and (max-width: 768px) {
  .item0 {
    display: block;
  }
  .item3 {
    display: none;
    grid-area: main;
  }
  .sticky-header {
    /* display: flex; */
    justify-content: space-between;
  }

  .main {
    margin-left: 0px;
  }

  .sidenav {
    /* width: 70%; */
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: -100%;
    /* Hide sidebar off-screen */
    background-color: #111;
    overflow-x: hidden;
    padding-top: px;
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
    /* background-color: #333; */
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    text-align: center;
  }

  .grid-container {
    display: grid;
    align-items: center;
    grid-template-areas: "menuButton menuButton logo logo   menu";
    gap: 5px;
    /* background-color: #2196F3; */
    /* padding: 10px; */
  }
  .item2 {
    grid-area: menu;
  }
}
</style>