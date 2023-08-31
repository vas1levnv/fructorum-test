<script setup>
const props = defineProps(['placeholder'])
</script>

<template lang="pug">
input(class="input" :placeholder="placeholder")
</template>

<style scoped lang="scss">
@import "public/css/vars";

.input {
  width: 100%;
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

@media (max-width: $sm) {
  .input {
    font-size: 0.875rem;
  }
}

</style>