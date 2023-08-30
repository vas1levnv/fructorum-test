<script setup>
const props = defineProps([
  "buttonView"
])

let isBlue = false

if (props.buttonView === "blue") {
  isBlue = true
}

</script>

<template lang="pug">
button(class="button" :class="{ button_blue: isBlue }")
  slot
</template>

<style scoped lang="scss">
@import "public/css/vars";

.button {
  padding: 0.625rem 3.125rem;
  border-radius: 0.175rem;
  background: $main-black;
  border: 1px solid $main-black;
  transition: $tr;
  font-size: 1.125rem;
  color: white;

  &:hover {
    background: $main-blue;
    border-color: $main-blue;
  }

  &_blue {
    background: $main-blue;
    border: 1px solid $main-blue;

    &:hover {
      background: transparent;
    }
  }
}
</style>