<script setup>
import TheLogo from "~/components/Ui/TheLogo.vue";
</script>

<template lang="pug">
header(class="header")
  div(class="container")
    div(class="header-wrapper")
      TheLogo
</template>

<style scoped lang="scss">
.header{
  position: sticky;
  top: 0;
  z-index: 1000;
  &-wrapper{
    display: flex;
    justify-content: center;
    padding: 1.75rem 0 1.5rem;
  }
}
</style>