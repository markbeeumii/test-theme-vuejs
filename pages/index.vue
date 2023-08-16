<template>
  <div>
    <nav-bar/>
      <home-page/>
    <footer-div/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import HomePage from '../components/HomePage.vue'
import Footer from '../components/Footer.vue'
 
export default{
  components:{
    'nav-bar': Navbar,
    'home-page' : HomePage,
    'footer-div' : Footer
  }
}
</script>