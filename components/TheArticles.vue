<script setup>
import TheButton from "~/components/Ui/TheButton.vue";
const props = defineProps(["articles"])
</script>

<template lang="pug">
div(class="posts")
  div(v-for="item in props.articles" :key="articles.link" class="posts-item")
    div(class="posts-item_img")
      img(:src="item.image")
    h3(class="posts-item_text") {{item.title}}
    NuxtLink(:to="'/articles' + item.link")
      TheButton Читать
</template>

<style lang="scss">
@import "public/css/vars";


</style>