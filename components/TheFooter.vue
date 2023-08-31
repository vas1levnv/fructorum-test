<script setup>
import TheLogo from "~/components/Ui/TheLogo.vue";
import TheForm from "~/components/TheForm.vue";
import facebookLogo from '~/src/img/facebook.svg'
import vkLogo from '~/src/img/vk.svg'
import telegramLogo from '~/src/img/telegram.svg'
import instagramLogo from '~/src/img/instagram.svg'
</script>

<template lang="pug">
footer(class='footer')
  div(class="container footer-wrapper")
    div(class="footer-content")
      div
        TheLogo
        div(class="footer_text") Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
      div
        div(class="footer_email-description") email
        a(class="footer_email" href="mailto:testblogsupport@gmail.com") testblogsupport@gmail.com
        ul(class="footer_list")
          li(class="footer_list-item")
            a(href="/")
              img(:src="facebookLogo")
          li(class="footer_list-item")
            a(href="/")
              img(:src="vkLogo")
          li(class="footer_list-item")
            a(href="/")
              img(:src="instagramLogo")
          li(class="footer_list-item")
            a(href="/")
              img(:src="telegramLogo")
    TheForm
</template>

<style scoped lang="scss">
@import "public/css/vars";

.footer {
  border-top: 2px solid $main-gray;
  font-size: 0.875rem;
  color: $main-gray;
  &-wrapper {
    padding-top: 3rem;
  }
  &-content{
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 4.375rem;
  }

  &_text{
    margin-top: 1.25rem;
    max-width: 440px;

  }

  &_email{
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.125rem;
    color: $main-black;
  }

  &_list{
    display: flex;
    margin: 0.625rem -0.625rem;
    list-style: none;
    &-item a{
      display: block;
      padding: 0.625rem;
    }
  }
}
</style>