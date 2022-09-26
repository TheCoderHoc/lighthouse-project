<template>
    <div class="hot-game">
        <h2 class="section-title">Hot Game</h2>
        <div class="images-wrapper">
            <img :src="require('../assets/sweet-bonanza.jpg')" alt="" />
            <img :src="require('../assets/sweet-bonanza.jpg')" alt="" />
            <img :src="require('../assets/sweet-bonanza.jpg')" alt="" />
            <img :src="require('../assets/sweet-bonanza.jpg')" alt="" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "HotGame",
    }
</script>

<style scoped>
    .hot-game {
        background-color: rgb(48, 48, 50);
        border-radius: 5px;
        padding: 15px;
        margin-top: 10px;
    }

    .section-title {
        color: rgb(235, 209, 147);
        font-size: 48px;
        font-weight: normal;
        margin-top: 5px;
    }

    .images-wrapper{
        display: flex;
        overflow-x: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;

    }

    .images-wrapper::-webkit-scrollbar{
        width: 0;
        height: 0;
    }

    .images-wrapper

    img {
        border-radius: 10px;
        margin: 0 10px;
        width: 230px;
    }

    @media screen and (max-width: 768px){
        .section-title{
            font-size: 16px;
        }
    }
</style>