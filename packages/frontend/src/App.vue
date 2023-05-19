<script setup lang="ts">
</script>

<template>
   <div class="navigation">
      <router-link to="/" active-class="activeClass">Home</router-link>
      <router-link to="/stats" active-class="activeClass">Stats</router-link>
   </div>
   <router-view></router-view>
</template>

<style scoped>
.navigation > :not(:last-child) {
   margin-right: 10px;
}

.navigation > * {
   border-radius: 6px;
   padding: 10px;
   box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
   background-color: #808080;
   border: 1px solid #7A7D81;
}

.activeClass {
   font-weight: bolder;
   background-color: #FFAB98;
}

</style>
