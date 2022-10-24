<template>
  <div id="header" class="sticky-top">
    <section class="header-group">
      <div class="container">
        <b-navbar toggleable="lg">
        <div class="logo">
          <b-link :to="{ name: 'Home' }">
            <b-img class="profile"
              :src="require('@/assets/images/logo/logo.jpg')"
              fluid
              alt="Camsolution Logo"
            >
            </b-img>
          </b-link>
        </div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
          <b-navbar-nav class="text nav">
            <b-nav-item href="#home">HOME</b-nav-item>
            <b-nav-item href="#experience">EXPERIENCE</b-nav-item>
            <b-nav-item href="#education">EDUCATION</b-nav-item>
            
            <b-nav-item href="#resume">RESUME</b-nav-item>
            <b-nav-item href="#protfolio">PORTFOLIO</b-nav-item>
            <b-nav-item href="#blog">BLOG</b-nav-item>
            <b-nav-item href="#footer">FOOTER</b-nav-item>
            <b-nav-item class="btn-consultant" href="#contact"> Contact Me </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <!-- <b-navbar-nav class="right-menu nav "> -->
          <!-- <b-nav-item class="btn-consultant " :to="{ name: 'Consultant' }"> BUY NOW </b-nav-item> -->
          <!-- <b-nav-item class="btn-consultant " :to="{ name: 'Consultant' }"> Consultancy <b-icon-arrow-right-short></b-icon-arrow-right-short></b-nav-item> -->
        <!-- </b-navbar-nav> -->
      </b-navbar>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import "../../assets/scss/layout/header";
</style>
