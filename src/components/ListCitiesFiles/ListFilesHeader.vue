<template>
  <section class="hero-wrap hero-wrap-2" style="background-image: url('/index_files/img/one-preson.webp')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row no-gutters slider-text align-items-center justify-content-center">
        <div class="col-md-9 pt-5 text-center">
          <p class="breadcrumbs">
            <span class="me-2"><router-link to="/">Главная <i class="fa fa-chevron-right"></i></router-link></span>
            <span><a v-bind:href="currentPageLink()">{{ this.$store.state.titleRu }}</a> <i class="fa fa-chevron-right"></i></span>
          </p>
          <h1 class="mb-5">Ремонт квартир <span>{{ this.$store.state.titleRu }}</span> </h1>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default{
    methods:{
        currentPageLink(){
            return this.$route.path;
        }
    }
}
</script>
