<template>
    <div class="entertainment">
        <div class="tabs">
            <div><img :src="require('../assets/live.png')" alt=""></div>
            <div><img :src="require('../assets/sport.png')" alt=""></div>
            <div><img :src="require('../assets/lottery.png')" alt=""></div>
            <div><img :src="require('../assets/poker.png')" alt=""></div>
            <div><img :src="require('../assets/game.png')" alt=""></div>
        </div>
        <div class="content">
            <div><img :src="require('../assets/tab-content-image-1.png')" alt="" /></div>
            <div><img :src="require('../assets/tab-content-image-2.png')" alt="" /></div>
            <div><img :src="require('../assets/tab-content-image-1.png')" alt="" /></div>
            <div><img :src="require('../assets/tab-content-image-2.png')" alt="" /></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Entertainment",
    }
</script>

<style scoped>
.entertainment {
        display: flex;
        padding: 10px;
    }

    .tabs {
        width: 14vw;
    }

    .tabs div {
        margin: 40px 0;
    }

    .content {
        flex: 1;
        margin-left: 10px;
    }

    .content div{
        flex-shrink: 0;
        margin: 20px 0;
    }

    .tabs div img{
        width: 80px;
    }

    .content img {
        width: 85%;
        height: auto;
    }

    @media screen and (max-width: 768px){
        .tabs div img {
            width: 50px;
        }

        .content {
            margin-left: 30px;
        }
    }

    @media screen and (max-width: 500px){
        .tabs div img {

        }
    }
</style>