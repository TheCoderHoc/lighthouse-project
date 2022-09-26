<template>
    <div class="miscellaneous">
        <div class="miscellaneous-left">
            <img :src="require('../assets/wallet.png')" alt="" />
            <h2>Username</h2>
        </div>
        <div class="divide"></div>
        <div class="miscellaneous-right">
            <img :src="require('../assets/audio.png')" alt="" />
            <h2>Dragon Boat Festival holiday!holiday!</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Miscellaneous",
    }
</script>

<style scoped>
    .miscellaneous {
        background-color: rgb(48, 48, 50);
        border-radius: 5px;
        display: flex;
        align-items: center;
        margin-top: 10px;
        padding: 15px 30px;
        
    }

    .miscellaneous-left, .miscellaneous-right {
        display: flex;
        align-items: center;
        flex: 1;
    }

    .miscellaneous-right{
        margin-left: 5px;
    }

    .miscellaneous div h2 {
        color: rgb(235, 209, 147);
        font-size: 18px;
        font-weight: normal;
        margin-left: 40px;
    }

    img {
        width: 40px;
    }

    .divide {
        background-color: #1a1a1a !important;
        height: 80px;
        width: 2px;
        margin-right: 5px;
    }

    @media screen and (max-width: 500px){
       .miscellaneous div h2 {
            font-size: 16px;
            margin-left: 20px;
       }
    }

    @media screen and (max-width: 400px){
       .miscellaneous div h2 {
            font-size: 14px;
            margin-left: 10px;
       }
    }
</style>