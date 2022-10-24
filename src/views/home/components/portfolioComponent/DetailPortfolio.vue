<template>
    <div id="portfolioDetail">
        <div class="section">
            <div class="container" >
              <div class="detail">
                <div class="close" @click="$emit('close')" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
              <div class="row">
                <div class="col col-lg-6 col-12 content-img">
                      <img class="img-product img-fluid "
                            :src="product.image"
                            fluid
                            >
                </div>
                <div class="col col-lg-6 col-12">
                  <div class="text">
                    <div class="subtitle">
                      <p>Featured - {{product.skill}}</p>
                    </div>
                    <div class="title">
                      <p>The services provide for design</p>
                    </div>
                    <div class="description">
                      <p>Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                    </div>
                    <div class="subdescription">
                      <p> Dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                    </div>
                    <div class="button">
                      <button class="like">LIKE THIS <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></button>
                      <button class="project">VIEW PROJECT <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>
    </div> 
</template>



<script>
  export default {
    name: 'DetailPortfolio',
    props:['product'],
    components: {

    },
    data() {
      return {
        assetUrl: process.env.VUE_APP_ASSET_URL + '/',
        serviceBackground: require('@/assets/images/list-service.png'),
        
      };
    },
  };
</script>

<style lang="scss">
@import "@/assets/scss/pages/home/portfolioDetail";
    
</style>












