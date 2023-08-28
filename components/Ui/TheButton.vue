<script setup>
const props = defineProps([
  'text',
  'color,'
])
const onClickBtn = (e) => {
  console.log('asas')
}
</script>

<template lang="pug">
button(@click="onClickBtn") {{text}}
</template>

<style scoped lang="scss">
button {
  background: teal;
}
</style>