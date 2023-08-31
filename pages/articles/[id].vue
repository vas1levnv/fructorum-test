<script setup>
import {useArticlesPageStore} from "~/stores/articlesStore";
import clockIcon from "~/src/img/clock.svg";
import watchingIcon from "~/src/img/watching.svg";
import TheSubscribeForm from "~/components/TheSubscribeForm.vue";

const route = useRoute()
const store = useArticlesPageStore()

//const content = JSON.parse(JSON.stringify(body))
useHead({
  title: store.metaArticles.title,
  meta: [
    {name: store.metaArticles.description}
  ],
})

onMounted(() => {
  store.fetchArticles(route.params.id)
})
</script>

<template lang="pug">
div(class="container")
  div(v-for="block in store.bodyArticles" :key="block.id" class="article")
    div(v-if="block.type === 'article_intro_block'" class="article-intro_block")
      div(class="article-intro_img")
        img(:src="block.data.image")
      div(class="article-intro_content")
        h1(class="article-intro_title") {{block.data.title}}
        div(class="article-intro_info")
          img(:src="clockIcon")
          div {{block.data.reading_time}} мин время чтения
        div(class="article-intro_info")
          img(:src="watchingIcon")
          div {{block.data.views_count}} прочитали статью
        p(class="article-intro_description") {{block.data.short_description}}
    div(v-if="block.type === 'text_block'" class="article-text_block" v-html="block.data")
    //думаю здесь ошибка в передаче данных у заголовка h2 и h3 у вас даже в фигме это написано
    div(v-if="block.type === 'image_block'" class="article-image_block")
      img(:src="block.data.src" alt="block.data.caption")
    div(v-if="block.type === 'slider_block'" class="slider_block")
      div() {{block.data}}
    div(v-if="block.type === 'subscribe_form_block'" class="subscribe_form_block")
      TheSubscribeForm
    div(v-if="block.type === 'article_list_block'" class="article-list_block")
      h2(class="article-list_title") {{block.data.title}}
      TheArticles(:articles="block.data.articles")
    div(v-if="block.type === 'cta_form_block'" class="cta_form_block")
      TheForm
</template>

<style lang="scss">
@import "public/css/vars";

.article {
  &:not(:last-child) {
    padding-bottom: 6.25rem;
  }

  p {
    line-height: 144.44%;
  }

  &-intro {
    &_block {
      display: grid;
      grid-template-columns: 5fr 7fr;
      align-items: center;
      gap: 1.875rem;
    }

    &_img {
      border-radius: 0.125rem 40% 0.125rem 0.125rem;
      overflow: hidden;
    }

    &_title {
      margin-bottom: 1.825rem;
    }

    &_info {
      display: flex;
      align-items: center;
      color: $main-gray;

      img {
        margin-right: 0.5rem;
      }
    }

    &_description {
      font-size: 1.125rem;
      margin-top: 3rem;
    }
  }

  &-text {
    &_block {
      width: 80%;
      max-width: 880px;
      margin: 0 auto;

      h2 {
        margin-bottom: 2.5rem;
      }

      p {
        padding: 0.625rem 0;
      }

      blockquote {
        display: grid;
        grid-template-columns: min-content 1fr;
        font-weight: 300;
        margin-top: 1.25rem;
        font-style: italic;

        &:before{
          content: url("../../src/img/quotes.svg");
          display: block;
          margin-right: 2.25rem;
          grid-row: 1/3;
        }

      }
    }
  }
  &-image{
    &_block{
      width: 100%;
      img{
        width: 100%;
      }
    }
  }
  &-list{
    &_block{

    }
    &_title{
margin-bottom: 3.125rem;
    }
  }
}
</style>