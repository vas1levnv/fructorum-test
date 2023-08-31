<script setup>
import TheInput from "~/components/Ui/TheInput.vue";
import TheButton from "~/components/Ui/TheButton.vue";
import image from "~/src/img/theFormImage.png"
</script>

<template lang="pug">
form(class="form" v-on:submit.prevent)
  div(class="form-image")
    img(:src="image" alt="formImage")
  div(class="form-content")
    h2 Стань участником проекта
    div(class="form-inputs")
      TheInput(placeholder="Имя")
      TheInput(placeholder="Телефон")
      TheInput(placeholder="Email")
    TheButton(buttonView="blue") Подписаться
</template>

<style scoped lang="scss">
@import "public/css/vars";

.form{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3.75rem;
  gap: 3.75rem;
  background: $main-black;
  color: white;

  &-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-image{
    position: relative;
    overflow: hidden;
    img{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) scaleX(-1);
    }
  }

  h2{
    margin-bottom: 3rem;
  }

  &-inputs{
    flex: 1 1 0;
    margin-bottom: 3rem;
    input:not(:last-child){
      margin-bottom: 1.5rem;
    }
  }
  button{
    width: min-content;
  }
}
@media (max-width: $lg) {
  .form{
    grid-template-columns: 1fr;
    &-image{
      height: 300px;
    }
  }
}

@media (max-width: $sm) {
  .form{
    padding: 1.5rem;
    gap: 1.5rem;
    h2{
      margin-bottom: 1.5rem;
    }
    &-inputs{
      margin-bottom: 1.5rem;
    }
  }
}

</style>