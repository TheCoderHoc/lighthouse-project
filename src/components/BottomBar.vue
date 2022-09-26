<template>
    <div class="bottom-bar">
        <div><img :src="require('../assets/home.png')" alt=""></div>
        <div><img :src="require('../assets/package.png')" alt=""></div>
        <div><img :src="require('../assets/money.png')" alt=""></div>
        <div><img :src="require('../assets/message.png')" alt=""></div>
        <div><img :src="require('../assets/user.png')" alt=""></div>
    </div>
</template>

<script>
    export default {
        name: "BottomBar",
    }
</script>

<style scoped>
.bottom-bar {
        background-color: rgb(48, 48, 50);
        display: flex;
        align-items: center;
        position: fixed;
        border: 2px solid rgb(229, 231, 235);
        bottom: 30px;
        z-index: 100000;
        padding: 10px 20px;
        width: 95%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
    }

    .bottom-bar div {
        flex: 1 1;
    }

    img {
        width: 40px;
    }

    @media screen and (max-width: 500px){
        .bottom-bar {
            justify-content: center;
        }

        img {
            width: 25px;
        }
    }
</style>