<template>
  <div class="wrapper">
    <Navbar />
    <Showcase />
    <HotGame />
    <Miscellaneous />
    <Entertainment />,
    <BottomBar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HotGame from "./components/HotGame.vue";
import Miscellaneous from "./components/Miscellaneous.vue";
import Showcase from "./components/Showcase.vue";
import Entertainment from "./components/Entertainment.vue";
import BottomBar from "./components/BottomBar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    HotGame,
    Miscellaneous,
    Showcase,
    Entertainment,
    BottomBar,
}
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6em;
}

h1,
h2,
h3,
h4 {
  line-height: 1.2;
  margin: 10px 0;
}

.wrapper {
  background-color: #1a1a1a;
  padding: 20px;
}
</style>

// Navbar
    // Notification Icon
    // Logo
    // Hamburger Menu
    // 
// Slider
// Hot Game
// Miscellaneous
// Tab Layout