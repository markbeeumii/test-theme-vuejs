<template>
  <NuxtPage />
</template>
<script>
import Layout from './layouts/default.vue'
export default{
  components:{
    'layout-page': Layout
  },
  mounted(){
    const darkMode = new URLSearchParams(window.location.search).get("theme");

      if (darkMode === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
  }
}
</script>

