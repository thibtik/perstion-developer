<template>
    <section class="breadcrumbs bg-img sy" :style="{ 'background-image': 'url(' + backgroundImg + ')' }">
        <div class="container sy ">
            <div class="title">
                <h1>{{title}}</h1>
            </div>
        </div>
    </section>
</template>

<script>
   export default{
   name:'Breadcrumb',
   props: {
    backgroundImg: {
        type: String,
        default: require('@/assets/images/breadcrumb/Artboard7.jpg'),
        description: 'Background Image'
      },
      title:{
        type: String,
        default: 'Title',
        description: 'title'
      }
   },
   data(){
    return{
        // background: require('@/assets/images/breadcrumb/Artboard 7.jpg'),
    }
   }

}
    
</script>
<style lang="scss">
   @import '@core/assets/scss/breadcrumb';

</style>