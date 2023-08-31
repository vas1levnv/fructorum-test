<script setup>
import TheButton from "~/components/Ui/TheButton.vue";
const props = defineProps(["articles"])
</script>

<template lang="pug">
div(class="posts")
  div(v-for="item in articles" :key="articles.link" class="posts-item")
    div(class="posts-item_img")
      img(:src="item.image")
    h3(class="posts-item_text") {{item.title}}
    NuxtLink(:to="'/articles' + item.link")
      TheButton Читать
</template>

<style scoped lang="scss">
@import "public/css/vars";

.posts{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 1.875rem;

 &-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    &_img{
      width: 100%;
      img{
        width: 100%;
      }
    }
    &_text{
      flex: 1 1 0;
      margin: 1.25rem 0 1.875rem;
    }
  }
}

@media (max-width: $md) {
  .posts{
    grid-template-columns: 1fr;
    &_text{
      flex: 1 1 0;
      margin: 0.75rem 0 1rem;
    }
  }
}

</style>