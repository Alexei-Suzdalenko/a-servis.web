<template>
  <section class="ftco-section ftco-services-section">
    <div class="container-xl">
      <div class="row">
        <div class="col-md-6 col-lg-4" v-for="(item, index) in listCityes.engCityes" v-bind:key="index">
          <router-link v-bind:to="'/apartment-repair/'+item">
            <div class="services d-flex">
              <div class="icon"><span v-bind:class="listClases[index]"></span></div>
              <div class="text"><h2>{{ listCityes.rusCityes[index] }}</h2></div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import fileListCities from "../../repository/cities";
export default {
  data() {
    return {
     // currentClass: 'flaticon-construction',  
      listClases: ["flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project","flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project","flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project","flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project","flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project","flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project","flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project","flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project","flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project","flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project","flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project","flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project","flaticon-construction","flaticon-house-1","flaticon-engineer","flaticon-accounting","flaticon-house","flaticon-project"],
      listCityes: {},
    }
  },
  created() {
    this.listCityes = fileListCities;
  },
  methods(){
    
  }
};
</script>
