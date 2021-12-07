<template>

  <div data-layout="default" id="app">
    <!-- <ToggleTheme /> -->
    <div class="wrapper">
    <div class="sidebar">
      
      <header class="site-header" role="banner">
    
    <g-link class="site-brand" to="/">
    <Logo />
    <span class="sr-only">{{ $static.metadata.siteName }}</span>
    </g-link>
    
    
    </header>
    
    <Navigation />
    
    <div class="sponsor">Some sponsor goes here.</div>
    
    </div><!-- /.sidebar -->


    <main class="site-content" id="site-content" role="main">

    

      <slot/>

    
    </main>
    </div>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>





<script>
import Logo from '~/components/Logo.vue'
// import ToggleTheme from '~/components/ToggleTheme.vue'
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation, 
    Logo,
   // ToggleTheme,
    Footer
  },

}
</script>



