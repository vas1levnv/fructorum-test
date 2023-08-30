<script setup>
import {useIndexPageStore} from "~/stores/indexStore";
import TheArticles from "~/components/TheArticles.vue";

const store = useIndexPageStore()

onMounted(()=>{
  store.fetchData()
})

useHead({
  title: store.meta.title,
  meta:[
    {name: store.meta.description}
  ],
})

</script>

<template lang="pug">
div(class='container')
  TheArticles(:articles="store.articles" )
</template>

<style scoped>

</style>