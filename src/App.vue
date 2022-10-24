<template>
  <div class="wrap">
    <!-- Header -->
    <Header />
      <HomeSection id="home"/>
      <Experience id="experience" :experiences="experiences"></Experience>
      <Education id="education" :educations="educations"></Education>
      <Resume :allresume='allresume' :allSkill='allSkill'></Resume>
       <Portfolio></Portfolio>
      <Blog id="blog"></Blog>
      <Contact id="contact"></Contact>
    <!-- Footer -->
    <Footer id="footer"/>
  </div>
</template>
<script>
  import Header from './layouts/header/Header.vue'
  import Footer from './layouts/footer/Footer.vue'
  import HomeSection from './views/home/components/HomeSection.vue'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import  Experience  from './views/home/components/Experience.vue'
import Education from './views/home/components/Education.vue'
import Resume from './views/home/components/Resume.vue'
import Portfolio from './views/home/components/portfolioComponent/Portfolio.vue'
import Blog from './views/home/components/Blog.vue'
import Contact from './views/home/components/Contact.vue'
  export default {
    name: 'LayoutWeb',
    components: {
      Header,
      Footer,
      HomeSection,
      Resume,
      Portfolio,
    // Swiper,
    // SwiperSlide,
    Experience,
    Education,
    Blog,
    Contact,
    },
    data() {
      return {
        assetUrl: process.env.VUE_APP_ASSET_URL + '/',
        serviceBackground: require('@/assets/images/list-service.png'),
        experiences:[{
          'date':'2015-Present',
          'title':'Rainbow - Themes.',
          'position':'Co-Founder, Web Designer & Developer',
          'description':'Reinvetning the way you create websites',
          'image':'https://inbio-react.netlify.app/static/57ab87af87223d70a70d396075f46c8c/d0f18/portfolio-01.webp'
        },
        {
          'date':'2018-Present',
          'title':'App Development.',
          'position':'Co-Founder, Web Designer & Developer',
          'description':'Reinvetning the way you create websites',
          'image':'https://inbio-react.netlify.app/static/a6d273d704eb2200c0d6fc5c67bc85df/d0f18/portfolio-02.webp'
        },{
          'date':'2020-Present',
          'title':'Application Management.',
          'position':'Co-Founder, Web Designer & Developer',
          'description':'Reinvetning the way you create websites',
          'image':'	https://inbio-react.netlify.app/static/4001311bd28adeda122878ec66af39de/d0f18/portfolio-03.webp'
        }
        ],
        educations:[{
          'date':'2015-Present',
          'title':'Software Develop.',
          'position':'Co-Founder, Web Designer & Developer',
          'description':'Reinvetning the way you create websites',
          'image':'https://inbio-react.netlify.app/static/59da1960acefc2729623a8df0e8aec5e/d0f18/portfolio-04.webp'
        },
        {
          'date':'2018-Present',
          'title':'Web Design.',
          'position':'Co-Founder, Web Designer & Developer',
          'description':'Reinvetning the way you create websites',
          'image':'https://inbio-react.netlify.app/static/8363a8c01ef33b9cdc639459fb5cc440/d0f18/portfolio-05.webp'
        }
        ],
        allresume:[
          { id: 1, header: 'Education Quality',title:'Personal Portfolio April Fools',descrip:'University of DVI (1997 - 2001)',description:'The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' },
          { id: 2, header: 'Job Experience',title:'Diploma in Web Development',descrip:'BSE In CSE (2004 - 2008)',description:'Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante' },
          { id: 3, header: 'Education Quality',title:'Examples Of Personal Portfolio',descrip:'College of Studies (2000 - 2002)',description:'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante' },
          ],
        allSkill:[
          {lang:"PHOTOSHOT", percent:85,   color:"#ec407a"},
          {lang:"HTML",percent:85,   color:"#f4511e"},
          { lang:"CSS", 			percent:80,   color:"#f4511e"	},
          { lang:"ADOBE XD", 	percent:60,   color:"#512da8"	},
          { lang:"JAVASCRIPT",		 	percent:90,   color:"#0288d1"	},
        ]
      };
    },

  };
</script>

<style lang="css">
.wrap{
  overflow-x: hidden;
}
    
</style>
