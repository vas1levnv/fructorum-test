<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps(["slides"])
const prev = ref(null);
const next = ref(null);
const page = ref(null);
const modules = [Pagination, Navigation]
</script>

<template lang="pug">
div(class="swiper-content")
  swiper(
    :space-between="50"
    :navigation="{prevEl: prev, nextEl: next}"
    :modules="modules"
    :pagination="{el:page ,type: 'fraction'}"
    )
    swiper-slide(v-for="el in props.slides")
      img(:src="el" alt="image" class="swiper-img")
  div(ref="prev" class="swiper-button-prev")
  div(ref="next" class="swiper-button-next")
  div(ref="page" class="swiper-button-pagination")
</template>

<style lang="scss">
@import "public/css/vars";

.swiper{
  &-content{
    position: relative;
    padding: 0 6rem 2rem;
  }

  &-button-next, &-button-prev{
    position: relative;
    width: 3.75rem !important;
    height: 3.75rem !important;
    color: $main-white !important;
    background: $main-black !important;
    &:after{
      font-size: 1.5rem !important;
      font-weight: 900;
    }
  }

  &-button-next{
    right: 0 !important;
  }

  &-button-prev{
    left: 0 !important;
  }

  &-button-pagination{
    position: absolute;
    bottom: -2.5rem !important;
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }
}
@media (max-width: $md) {
  .swiper{
    &-content{
      padding: 0 3rem 1.5rem;
    }
    &-button-next, &-button-prev{
      width: 2rem !important;
      height: 2rem !important;
      &:after{
        font-size: 0.75rem !important;
      }
    }
  }
}

</style>