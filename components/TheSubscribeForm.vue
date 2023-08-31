<script setup>
import TheButton from "~/components/Ui/TheButton.vue";
import TheInput from "~/components/Ui/TheInput.vue";

</script>

<template lang="pug">
form(class="form" v-on:submit.prevent)
  h3(class="form_title") Подпишись на рассылку
  div(class="form-content")
    TheInput(placeholder="Email" )
    TheButton(buttonView="blue") Подписаться
</template>

<style scoped lang="scss">
@import "public/css/vars";

.form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem;
  background: $main-black;
  color: white;
  gap: 2.25rem;

  &-content{
    align-self: stretch;
    display: flex;
    align-items: center;
    width: 50%;
  }
  input{
    margin-right: 2.25rem;
    max-width: 350px;
  }
}

@media (max-width: $lg) {
  .form{
    flex-direction: column;
    padding: 1.5rem;
    &-content{
      justify-content: space-between;
      width: 100%;
    }
  }
}

@media (max-width: $sm) {
  .form{
    padding: 1rem;
    gap:1rem;
    &-content{
      flex-direction: column;

      input{
        margin: 0;
      }

      button{
        margin-top: 1rem;
      }
    }
  }
}
</style>