<template>
  <div id="portfolio">
    <div class="section">
      <div class="container">
        <div class="title-content text-center">
          <span>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</span>
          <p class="title">My Portfolio</p>
        </div>
        <div class="row ">
          <div class="col col-lg-4 col-12 " v-for="(product,i) in products" :key="i" >
            <div class="card-porfolio" @click="detail(product)">
              <div class="content-img">
                <div class="zoom-img ">
                  <img class="img-porfolio img-fluid "
                      :src="product.image"
                      >
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <p class="skill" >{{product.skill}}</p>
                <p class="skill text-dark icon"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>   650</p>
              </div>
              <div class="">
                <P class="description">{{product.title }}  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </P>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div v-if="isShowDetail">
        <DetailPortfolio :product='product'  @close='isShowDetail=false'/>
      </div>
    </div> 
</template>

<script>
  import DetailPortfolio from './DetailPortfolio.vue'
  export default {
    name: 'Portfolio',
    components: {
      DetailPortfolio,
    },
    data() {
      return {
        isShowDetail:false,
        product:{},
        assetUrl: process.env.VUE_APP_ASSET_URL + '/',
        serviceBackground: require('@/assets/images/list-service.png'),
        products:[
          {
          'id' :'1',
          'skill':'PHOTOSHOP',
          'title':'The services provide for design',
          'description':'Cupiditate distinctio assumenda explicabo veni sdfjsf kdjfld sdfdf',
          'detail':'Cupiditate distinctio assumenda explicabo veni sdfjsf kdjfld sdfdf',
          'image':'https://inbio-react.netlify.app/static/b4e650e6d577f42def9df4d8e773332b/d0f18/portfolio-06.webp'
        },
          {
          'id' :'2',
          'skill':'FIGMA',
          'title':'Mobile app landing design & Services',
          'description':'Cupiditate distinctio assumenda explicabo veni sdfjsf kdjfld sdfdf',
          'detail':'Cupiditate distinctio assumenda explicabo veni sdfjsf kdjfld sdfdf',
          'image':'https://inbio-react.netlify.app/static/8363a8c01ef33b9cdc639459fb5cc440/d0f18/portfolio-05.webp'
        },
          {
          'id' :'3',
          'skill':'Laravel',
          'title':'Web app Responsive design & Services',
          'description':'Cupiditate distinctio assumenda explicabo veni sdfjsf kdjfld sdfdf',
          'detail':'Cupiditate distinctio assumenda explicabo veni sdfjsf kdjfld sdfdf',
          'image':'https://inbio-react.netlify.app/static/59da1960acefc2729623a8df0e8aec5e/d0f18/portfolio-04.webp'
        },
        ],
      };
    },
    methods:{
      detail(product){
        this.isShowDetail=true;
        this.product=product;
      }
    }
  };
</script>

<style lang="scss">
@import "@/assets/scss/pages/home/portfolio";

    
</style>












