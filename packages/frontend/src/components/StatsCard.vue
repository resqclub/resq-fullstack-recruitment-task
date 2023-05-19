<script setup lang="ts">
defineProps(['title', 'text'])
</script>

<template>
  <article class="box">
      <div class="title">{{ title }}:</div>
      <div class="content">{{ text }}</div>
  </article>
</template>

<style scoped>
.box {
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
    color: #4a4a4a;
    padding: 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.title {
    margin-top: 0;
    text-align: start;
    font-weight: bolder;
    margin-right: 0.5rem;
}

.content {
    text-align: start;
}
</style>
