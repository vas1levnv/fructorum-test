<template lang="pug">

div(class="app")
  TheHeader
  main
    NuxtPage
  TheFooter
</template>

<script setup lang="ts">
import TheHeader from "~/components/TheHeader.vue";
</script>

<style lang="scss">
@import "public/css/vars";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,800;1,300&family=Ubuntu&display=swap');

.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100vw;
  min-height: 100svh;
  font-family: 'Montserrat', sans-serif;
  color: $main-black;
  background: $main-white;
}

body{
  overflow-x: hidden;
}

main{
  flex: 1 1 0;
  margin: 1.875rem 0;
}

.container {
  max-width: 540px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: $md) {
    max-width: 720px;
  }
  @media (min-width: $lg) {
    max-width: 960px;
  }
  @media (min-width: $xl) {
    max-width: 1140px;
  }
  @media (min-width: $xxl) {
    max-width: 1320px;
  }
}

* {
  padding: 0;
  margin: 0;
  border: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a, a:link, a:visited {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

aside, nav, footer, header, section, main {
  display: block;
}

h1, h2, h3, h4, h5, h6, p {
  font-size: inherit;
  font-weight: inherit;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: 800;
}
h1{
  font-size: 3.5rem;
}

h2{
  font-size: 2.125rem;
}

h3{
  font-size: 1.375rem;
}

img {
  vertical-align: top;
}

img, svg {
  max-width: 100%;
  height: auto;
}

address {
  font-style: normal;
}

input, textarea, button, select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}

input::-ms-clear {
  display: none;
}

button, input[type="submit"] {
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
  background: none;
  cursor: pointer;
}

input:focus, input:active,
button:focus, button:active {
  outline: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

label {
  cursor: pointer;
}

legend {
  display: block;
}

</style>