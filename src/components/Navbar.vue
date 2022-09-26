<template>
    <div class="navbar">
        <img :src="require('../assets/notification.png')" alt="Notification Icon" />
        <img :src="require('../assets/logo.png')" alt="Logo" />
        <img :src="require('../assets/menu-bar.png')" alt="Menu Bar" />
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .navbar {
        background-color: #181818;
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
    }

    .navbar img:first-child {
        width: 40px;
    }

    .navbar img:last-child{
        width: 20px;
    }

    .navbar img:nth-child(2){
        width: 100px;
    }

    @media  screen and (max-width: 500px) {

        .navbar img:nth-child(2){
            width: 100px;
        }
    }

    @media screen and (max-width: 360px){
        .navbar {
            padding: 10px;
        }
    }
</style>