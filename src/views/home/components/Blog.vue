<template>
    <div class="blog">
        <div class="contents">
            <div class="header-blog text-center">
                <span class="subtitle">VISIT MY BLOG AND KEEP YOUR FEEDBACK</span>
                <h1 class="title">My Blog</h1>
            </div>
            <div class="row position-relative">
                <div class="col-lg-4 col-md-6  col-sm-12 card-box">
                    <div class="blog-card rounded-5 m-lg-2 m-md-3 m-sm-5">
                        <div class="img rounded-4">
                            <img class="rounded-4" :src="pic1" alt="">
                        </div>
                        <div class="content-col">
                            <div class="sub-col">
                                <span class="name">CANADA</span>
                                <div>
                                    <b-icon icon="clock"></b-icon>
                                    <span class="time">2 min read</span>
                                </div>
                            </div>
                            <div class="infor-detail">
                                <h4><a href="">T-shirt design is the part of design
                                <b-icon class="arrow-up" icon="arrow-up-right" aria-hidden="true"></b-icon>
                                </a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 card-box">
                    <div class="blog-card rounded-5 m-lg-2 m-md-3 m-sm-5">
                        <div class="img rounded-4">    
                            <img class="rounded-4"  :src="pic2" alt="">
                        </div>
                        <div class="content-col">
                            <div class="sub-col d-flex">
                                <span class="name">DEVELOPMENT</span>
                                <div>
                                    <b-icon icon="clock"></b-icon>  
                                    <span class="time">2 min read</span>
                                </div>
                            </div>
                            <div class="infor-detail">
                                <h4><a href="">The services provide for design
                                <b-icon class="arrow-up" icon="arrow-up-right" aria-hidden="true"></b-icon>
                                </a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="blog-card rounded-5 m-lg-2 m-md-3 m-sm-5">
                        <div class="img rounded-4">
                            <img class="rounded-4"  :src="pic3" alt="">
                        </div>
                        <div class="content-col">
                            <div class="sub-col d-flex">
                                <span class="name">APPLICATION</span>
                                <div>
                                    <b-icon icon="clock"></b-icon>
                                    <span class="time">2 min read</span>
                                </div>
                            </div>
                            <div class="infor-detail">
                                <h4><a href="">Mobile app landing design & app maintain
                                    <b-icon class="arrow-up" icon="arrow-up-right" aria-hidden="true"></b-icon>
                                </a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../../../assets/scss/pages/home/blog.scss';
</style>

<script>
export default {
    data(){
        return{
            pic1:'https://inbio-react.netlify.app/static/953f09919eb224ffd8d5ada9ac38150b/d0f18/blog-big-01.webp',
            pic2:'https://inbio-react.netlify.app/static/24178887690433586b7481f2588d4cad/d0f18/blog-02.webp',
            pic3:'https://inbio-react.netlify.app/static/4302dce3a785c626c0756545d42f860c/d0f18/blog-03.webp'
        }
    }
}
</script>