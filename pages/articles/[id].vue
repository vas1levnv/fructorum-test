<script setup>
import {useArticlesPageStore} from "~/stores/articlesStore";

const route = useRoute()
const store = useArticlesPageStore()

//const content = JSON.parse(JSON.stringify(body))
useHead({
  title: store.metaArticles.title,
  meta:[
    {name: store.metaArticles.description}
  ],
})

onMounted(()=>{
  store.fetchArticles(route.params.id)
})
</script>

<template lang="pug">
div(class="container")
  div(v-for="block in store.bodyArticles" :key="block.type" class="article")
    div(v-if="block.type === 'article_intro_block'" class="article_intro_block")
      div() {{block.data}}
    div(v-if="block.type === 'text_block'" class="text_block")
      div() {{block.data}}
    div(v-if="block.type === 'image_block'" class="image_block")
      div() {{block.data}}
    div(v-if="block.type === 'slider_block'" class="slider_block")
      div() {{block.data}}
    div(v-if="block.type === 'subscribe_form_block'" class="subscribe_form_block")
      div() {{block.data}}
    div(v-if="block.type === 'article_list_block'" class="article_list_block")
      div() {{block.data}}
    div(v-if="block.type === 'cta_form_block'" class="cta_form_block")
      div() {{block.data}}
</template>

<style scoped lang="scss">

</style>