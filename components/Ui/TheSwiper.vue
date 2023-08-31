<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const props = defineProps(["slides"])
</script>

<template lang="pug">
swiper(:space-between="50")
  swiper-slide(v-for="el in props.slides")
    img(:src="el" alt="image")
</template>

<style scoped lang="scss">

</style>