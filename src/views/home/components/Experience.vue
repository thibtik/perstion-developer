<template>
    <div class="experience">
        <div class="content">
            <div class="title-content">
                <div class="header-experience text-center">
                    <span class="subtitle text-uppercase">OVER 10 YEARS OF EXPERIENCE</span>
                    <h1 class="text-capitalize">My Experience</h1>
                </div>
            </div>
            <div class="row position-relative">
                <div class="col-lg-12 col-md-6 " v-for="experience,index in experiences" :key="index">
                    <div class="row p-4 rounded row-card m-lg-3 m-md-2 m-sm-4">
                        <div class="col-xl-3 col-lg-5 col-md-12 rounded img-cards">
                            <img :src="experience.image" class="rounded img-fluid" alt="">
                        </div>
                        <div class="col-xl-9 col-lg-7 col-md-12 detail-info">
                            <div class="text-infor">
                                <span class="date text-white p-1 rounded-pill">{{ experience.date }}</span>
                                <h3 class="title pt-2">{{experience.title}}</h3>
                                <h5 class="position pt-3">{{experience.position}}</h5>
                                <p class="description">{{experience.description}}</p>
                            </div>
                            <div class="experience-right">
                                <button class="contact-btn border-0 rounded text-uppercase">Contact Me</button>
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
    props:['experiences']
}
</script>
<style lang="scss">
     @import '../../../assets/scss/pages/home/experience.scss';
</style>