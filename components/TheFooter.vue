<script setup>

import TheLogo from "~/components/Ui/TheLogo.vue";
import TheForm from "~/components/TheForm.vue";
</script>

<template lang="pug">
footer(class='footer')
  div(class='container footer-wrapper')
    div(class='footer-content')
      div
        TheLogo
        div(class='footer_text') Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
      div
        div email
        a(href='mailto:testblogsupport@gmail.com') testblogsupport@gmail.com
        ul(class='footer_list')
          li
            a(href='/')
    TheForm
</template>

<style scoped lang="scss">
@import "public/css/vars";

.footer {
  border-top: 2px solid $main-gray;
  &-wrapper {
    padding-top: 3rem;
  }
  &-content{
    display: flex;
    justify-content: space-between;
    align-self: end;
    margin-bottom: 4.375rem;
  }

  &_text{
    max-width: 440px;
  }

  &_list{
    display: flex;
  }
}
</style>