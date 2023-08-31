<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps(["slides"])
</script>

<template lang="pug">
swiper(
  :space-between="50"
  :navigation="true"
  :pagination="{type: 'fraction'}"
  )
  swiper-slide(v-for="el in props.slides")
    img(:src="el" alt="image")
</template>

<style scoped lang="scss">

</style>