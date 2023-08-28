<script setup>

import TheLogo from "~/components/Ui/TheLogo.vue";
import TheButton from "~/components/Ui/TheButton.vue";
</script>

<template lang="pug">
footer(class='footer')
  div(class='container footer-wrapper')
    div(class='footer-content')
      TheLogo
      div asasafkasdglasdg9
    form(class="footer-form" v-on:submit.prevent)
      div Подпишись на рассылку
      div
        input(placeholder="email")
        TheButton(text="tex12121212t" color="red")
</template>

<style scoped lang="scss">
@import "public/css/vars";

.footer {
  border-top: 2px solid $main-gray;

  &-wrapper {
    padding-top: 3rem;

  }
  &-content{
    margin-bottom: 4.375rem;
  }

  &-form{
    padding: 1.75rem;
    background: $main-black;
    color: white;
  }
}
</style>