<template>
  <div class="footer">
    <section class="footer-content">
      <div class="container ">
        <div class="row" >
          <div  class=" col col-lg-3 col-12 col-md-6 social-content ">
            <div class="logo">
              <b-link :to="{ name: 'Home' }">
                <b-img class="profile"
                  :src="require('@/assets/images/logo/logo.jpg')"
                  fluid
                  alt="Camsolution Logo"
                >
                </b-img>
              </b-link>
            </div>
            <div class="social-icon">
              <div class="d-flex">
                <div class="social ">
                  <a href="" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                </div>
                <div class="social ">
                  <a href="" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                </div>
                <div class="social ">
                  <a href="" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                </div>
              </div>
            </div>
          </div>
          <div class=" col col-lg-3 col-12 col-md-6 text-product" >
            <p class="text-red">PRODUCT</p>
            <P>Database</P>
            <P>Authentication</P>
            <P>Storage</P>
            <P>Support</P>
            <P>Pricing</P>
          </div>
          <div  class="col col-lg-3 col-12 col-md-6">
            <p class="text-red">RESOURCES</p>
            <P>Authentication</P>
            <P>System Status</P>
            <P>Terms of service</P>
            <P>Pricing</P>
            <P>over right</P>
          </div>
          <div class=" col col-lg-3 col-12 col-md-6 ">
            <p class="text-red">DEVELOPERS</p>
            <P>Documentation</P>
            <P>Authentication</P>
            <P>API Reference</P>
            <P>Support</P>
            <P>Open Source</P>
          </div>
        </div>
        
      </div>
    </section>
    <div class="text-center p-3 text-red">
      <p>?? 2022. All rights reserved by <a class=" cursor: pointer;" href="https://mdbootstrap.com/">Rainbow-Themes</a></p>
    </div>
  </div>
</template>
<script>
  
  export default {
    name: 'Footer',
    components: {
      
    },
    data() {
      return {
        serviceBackground: require('@/assets/images/cta_bg1.png'),
        visible: false,
      };
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/layout/footer';
</style>
