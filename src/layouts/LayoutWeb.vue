<template>
  <div class="wrap">
    <!-- Header -->
    <Header />
    <main class="wrap-content">
      <router-view/>
    </main>
    <!-- Footer -->
    <Footer />
  </div>
</template>
<script>
  import Header from './layouts/header/Header.vue'
  import Footer from './layouts/footer/Footer.vue'

  export default {
    name: 'LayoutWeb',
    components: {
      Header,
      Footer
    },
    
  };
</script>
