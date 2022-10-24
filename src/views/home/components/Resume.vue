<template>
    <div id="resume">
        <section class="resume-content">
            <div class="container">
                <div class="title-content text-center">
                    <span>7+ YEARS OF EXPERIENCE</span>
                    <p class="title">My Resume</p>
                </div>
                <div class="list">
                    <b-tabs pills content-class="mt-3" class="" fill>
                        <b-tab title="Education" active >
                            <div class="row" v-if="isEducation">
                                <div  class="col col-lg-6 col-md-12 col-sm-12 "  >
                                    <div class="content-title" >
                                        <span>2007 - 2010</span>
                                        <p class="maintitle">Education Quality </p>
                                    </div>
                                    <div class="resume-list">
                                        <div class="experience-list position-relative " v-for="resume,i in allresume" :key="i">
                                            <div class="resume-inner  position-absolute"></div>
                                            <div class="circle-inner  position-absolute"></div>
                                            <div class="header-content  " >
                                                <div class="header">
                                                    <h2 class="title">{{resume.title}}</h2>
                                                    <p class="descrip">{{ resume.descrip }}</p>
                                                </div>
                                                <div class="inner">
                                                    4.30/5
                                                </div>
                                            </div>
                                            <div class="description-content">
                                                <p class="description">{{resume.description}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  class="col col-lg-6 col-md-12 col-sm-12 "  >
                                    <div class="content-title" >
                                        <span>2007 - 2010</span>
                                        <p class="maintitle">Education Quality </p>
                                    </div>
                                    <div class="resume-list">
                                        <div class="experience-list position-relative " v-for="resume,i in allresume" :key="i">
                                            <div class="resume-inner  position-absolute"></div>
                                            <div class="circle-inner  position-absolute"></div>
                                            <div class="header-content  " >
                                                <div class="header">
                                                    <h2 class="title">{{resume.title}}</h2>
                                                    <p class="descrip">{{ resume.descrip }}</p>
                                                </div>
                                                <div class="inner">
                                                    4.30/5
                                                </div>
                                            </div>
                                            <div class="description-content">
                                                <p class="description">{{resume.description}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="Professional skills">
                            <div class="row" >
                                <div  class="col col-lg-6 col-md-6 col-sm-12 col-12" >
                                    <div class="content-title" >
                                        <span>Feature</span>
                                        <p class="maintitle" >Design skill</p>
                                    </div>
                                    <div class="skill" v-for="skill,i in allSkill" :key="i">
                                        <div class="progress-bar-content">
                                            <div class="lang m-1">{{ skill.lang }}</div>
                                            <span class="percent">{{skill.percent}}%</span>
                                        </div>
                                        <div class="bar">
                                            <div class="progress-bar" >
                                                <div class="progressing" v-bind:style = "{'background':skill.color, 'width':skill.percent+'%'}"></div>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  class="col col-lg-6 col-md-6 col-sm-12 col-12" >
                                    <div class="content-title" >
                                        <span>Feature</span>
                                        <p class="maintitle" >Design skill</p>
                                    </div>
                                    <div class="skill" v-for="skill,i in allSkill" :key="i">
                                        <div class="progress-bar-content">
                                            <div class="lang m-1">
                                                {{ skill.lang }}
                                            </div>
                                            <span class="percent">{{skill.percent}}%</span>
                                        </div>
                                        <div class="bar">
                                            <div class="progress-bar" >
                                                <div class="progressing" v-bind:style = "{'background':skill.color, 'width':skill.percent+'%'}"></div>  
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </b-tab>
                        <b-tab title="Experience">
                            <div class="row" v-if="isEducation">
                                <div  class="col col-lg-6 col-md-12 col-sm-12 resume-list"  >
                                    <div class="experience-list position-relative " v-for="resume,i in allresume" :key="i">
                                        <div class="resume-inner position-absolute"></div>
                                        <div class="circle-inner position-absolute"></div>
                                        <div class="header-content  " >
                                            <div class="header">
                                                <h2 class="title">{{resume.title}}</h2>
                                                <p class="descrip">{{ resume.descrip }}</p>
                                            </div>
                                            <div class="inner">
                                                4.30/5
                                            </div>
                                        </div>
                                        <div class="description-content">
                                            <p class="description">{{resume.description}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-lg-6 col-md-12 col-sm-12 resume-list"  >
                                    <div class="experience-list position-relative " v-for="resume,i in allresume" :key="i">
                                        <div class="resume-inner position-absolute"></div>
                                        <div class="circle-inner position-absolute"></div>
                                        <div class="header-content" >
                                            <div class="header">
                                                <h2 class="title">{{resume.title}}</h2>
                                                <p class="descrip">{{ resume.descrip }}</p>
                                            </div>
                                            <div class="inner">
                                                4.30/5
                                            </div>
                                        </div>
                                        <div class="description-content">
                                            <p class="description">{{resume.description}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="Interview">
                            <div class="row" v-if="isEducation">
                                <div  class="col col-lg-6 col-md-12 col-sm-12 resume-list"  >
                                    <div class="experience-list position-relative " v-for="resume,i in allresume" :key="i">
                                        <div class="resume-inner  position-absolute"></div>
                                        <div class="circle-inner  position-absolute"></div>
                                        <div class="header-content  " >
                                            <div class="header">
                                                <h2 class="title">{{resume.title}}</h2>
                                                <p class="descrip">{{ resume.descrip }}</p>
                                            </div>
                                            <div class="inner">
                                                4.30/5
                                            </div>
                                        </div>
                                        <div class="description-content">
                                            <p class="description">{{resume.description}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-lg-6 col-md-12 col-sm-12 resume-list"  >
                                    <div class="experience-list position-relative " v-for="resume,i in allresume" :key="i">
                                        <div class="resume-inner position-absolute"></div>
                                        <div class="circle-inner position-absolute"></div>
                                        <div class="header-content" >
                                            <div class="header">
                                                <h2 class="title">{{resume.title}}</h2>
                                                <p class="descrip">{{ resume.descrip }}</p>
                                            </div>
                                            <div class="inner">
                                                4.30/5
                                            </div>
                                        </div>
                                        <div class="description-content">
                                            <p class="description">{{resume.description}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: ['allresume','allSkill'],
    name:'Resume',
    data(){
        return{
            isEducation:true,
            isSkill:false,
            isExperience:false,
            isInterview:false,
        }
    }
}
</script>
<style lang="scss">
@import "../../../assets/scss/pages/home/resume";
</style>