<template>
    <div class="experience">
        <div class="content">
            <div class="title-content">
                <div class="header-experience text-center">
                    <span class="subtitle text-uppercase">PHD, MASTER AND BACHELOR</span>
                    <h1 class="text-capitalize">Education</h1>
                </div>
            </div>
            <div class="row position-relative">
                <div class="col-lg-12 col-md-6" v-for="education,index in educations" :key="index">
                    <div class="row p-4 rounded row-card m-lg-3 m-md-2 m-sm-4">
                        <div class="col-xl-3 col-lg-5 col-md-12 rounded img-cards">
                            <img :src="education.image" class="rounded img-fluid" alt="">
                        </div>
                        <div class="col-xl-9 col-lg-7 col-md-12 detail-info">
                            <div class="text-infor">
                                <span class="date text-white p-1 rounded-pill">{{ education.date }}</span>
                                <h3 class="title pt-2">{{education.title}}</h3>
                                <h5 class="position pt-3">{{education.position}}</h5>
                                <p class="description">{{education.description}}</p>
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
    props:['educations']
}
</script>

<style lang="scss">
     @import '../../../assets/scss/pages/home/experience.scss';
</style>