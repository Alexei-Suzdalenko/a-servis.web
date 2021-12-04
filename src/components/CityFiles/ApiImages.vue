<template>
  <section class="ftco-gallery ftco-section" v-if="photo_referenceArray.length > 1"><!-- v-if="photo_referenceArray.length > 1 -->
    <div class="container-xl-fluid">
      <div>
          <h4 style="font-size:44px;margin-left:10%;">{{ this.$store.state.titleRu }}</h4>
      </div>    
      <span style="display:none;">{{ currentLinkPage() }}</span>
      <div class="row g-0">
        <div class="col-md-4 aos-init" style="float:left" v-for="(refer, index) in photo_referenceArray"  v-bind:key="index">
            <a href="" target="_blank"> 
            <img v-if="photo_referenceArray[index]"
                 v-bind:src="photo_referenceArray[index]" v-bind:alt="'Ремонт квартир ' + this.$store.state.titleRu" class="gallery-wrap img d-flex align-items-end justify-content-center">
            </a>     
        </div>
      </div>

    </div>
  </section>
</template>
<script>
export default{
    data(){
        return{
            photo_referenceArray: []
        }
    },
    created(){                            
      this.startRequestImages();
    },
    methods:{
        startRequestImages(){ 
           // get images from php files           
           fetch('https://skalexandr.000webhostapp.com/vendor/?get='+this.$route.params.city).then(res => res.json()).then(res => {                              
                let arrayImages = res.img.split(',');
                console.log('listado imagenes LEIDOS desde php archivos', arrayImages);
                this.photo_referenceArray = arrayImages;
            }).catch(err => {
                 // if I have error, I need put images in php files
                 fetch('https://skalexandr.000webhostapp.com/vendor/?city='+this.$route.params.city).then(res => res.json()).then(res => {
                     console.log('listado imagenes PARSEADOS', res);
                 });
            });
            // esos dias renovamos los imagenes 
            const d = new Date();
            let day = d.getDay(); 
            if ( day / 5 == 0 ) { fetch('https://skalexandr.000webhostapp.com/vendor/?city='+this.$route.params.city); }
       },
       currentLinkPage(){
         fetch('https://skalexandr.000webhostapp.com/vendor/?get='+this.$route.params.city).then(res => res.json()).then(res => {                              
                let arrayImages = res.img.split(',');
                console.log('listado imagenes LEIDOS desde php archivos', arrayImages);
                this.photo_referenceArray = arrayImages;
          });
         return window.location.href;
       }
    }
}
</script>
