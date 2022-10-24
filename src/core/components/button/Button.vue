<template>
    <b-link :to="link" class="btn-main"> {{title}} <b-icon-arrow-right-short></b-icon-arrow-right-short
                ></b-link>
</template>
<script>
export default{
   name:'button-main',
   props: ['title','link']
}

</script>
<style lang="scss">
    @import '@core/assets/scss/button';
</style>