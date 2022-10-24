<template>
    <div class="home">
        <section class="home-content ">
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="col col-lg-5 col-12 card-info col-md-12 col-sm-12  " >
                            <div class="user-info p-5  shadow rounded">
                                <div class="user ">
                                    <div class="icon-user">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    </div>
                                </div>
                                <h2 class="title">Hi, I'm 
                                    <span class="text-red">InBio</span> 
                                </h2>
                                <p class="m">Web designer and developer working for envato.com in <br> Paris, France.</b-card-text>
                                <div class="user-info-icon">
                                    <div class="info">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" "><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                        <p class="">Web designer & developer</p>
                                    </div>
                                    <div class="info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        <p class="">john.slady@gmail.com</p>
                                    </div>
                                    <div class="info">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        <p class="">Paris fan</p>
                                    </div>
                                </div>
                            </div>
                            <div class=" button-list p-3 shadow rounded ">
                                <b class="p-4">Download my curriculum vitae:</b>
                                <div class="btn-home ">
                                    <button class="mt-4 mb-2 btn ">DOWNLOAD CV</button>
                                    <button class="mt-4 mb-2 btn">CONTACT ME</button>
                                </div>
                            </div>
                    </div>
                    <div class="col col-lg-7 col-12  px-3 rounded col-md-12 col-sm-12">
                        <div class="user-img p-3 shadow rounded">
                            <img class="profile img-fluid "
                                :src="require('@/assets/images/banner.png')"
                                fluid
                                >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
@import "@assets/scss/pages/home/home-section.scss";
</style>


