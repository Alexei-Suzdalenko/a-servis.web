<template>
<section>
<div>
<div class="col-md-7 text-center heading-section">
<h2 class="mb-5">Выполненные проекты</h2><span style="display:none;">{{ thisDataChanged() }}</span>
</div>
</div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 aos-init" v-for="(item, index) in resultImages" v-bind:key="index">
          <div class="staff">
            <img v-bind:src="item" v-bind:alt="'РЕМОНТ КВАРТИР ' + this.$route.params.city" class="img">
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script>
export default{
    data(){
        return{
            resultImages: []
        }
    },
    created(){},
    methods:{
        thisDataChanged(){
            this.resultImages = [];
            let getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
            for(let i = 0; i < 8; i++){
                let randomNum = getRandom(0, 98);
                this.resultImages.push('/alexandr/img' + randomNum + '.jpg');
            }
            return this.$route.params.city;
        }
    }
}
</script>

