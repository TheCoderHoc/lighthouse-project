<template>
    <slider height="400px" :indicators="false" :touch="true" :control-btn="false">
        <slider-item v-for="(image, index) in images" :key="index" >
            <img :src="require('../assets/swipe.png')" alt="" width="100%" height="100%" />
        </slider-item>
    </slider>
</template>

<script>
    export default {
        name: "Showcase",
        data: function () {
            return {
                images: [
                    'https://sikwin-test.netlify.app/assets/swiper3.c53a0aaf.png',
                    'https://sikwin-test.netlify.app/assets/swiper3.c53a0aaf.png'
                ]
            }
        }
    }
</script>