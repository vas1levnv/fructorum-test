<script setup>

</script>

<template lang="pug">
input(placeholder="Email")
</template>

<style scoped lang="scss">
@import "public/css/vars";

input {
  width: 100%;
  height: 100%;
  background: none;
  padding: 0.5rem;
  border-bottom: 1px solid $main-gray;
  transition: $tr;
  font-size: 1.125rem;

  &::placeholder{
    color: $main-gray;
  }

  &:active{
    border-color: $main-blue;
  }
}
</style>