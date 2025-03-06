<template>
  <div class="greetings">
    <h1>Render Some Markdown</h1>
    <hr />
    <MDReadme />
    <hr />
  </div>
</template>

<script setup>
// import MDReadme from "../content/readme.md";
import * as md_obj from "../content/readme.md"
const MDReadme = md_obj.default
console.log('md_obj', md_obj)
</script>
