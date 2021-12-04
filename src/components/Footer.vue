<template>
<footer class="ftco-footer">
    <div class="container-xl">
        <div class="row justify-content-between">
            <div class="col-md-6 col-lg">
                <div class="ftco-footer-widget mb-4">
                    <h2 class="ftco-heading-2 logo d-flex">
                        <a class="navbar-brand align-items-center" v-bind:href="currentRoutePage()" target="_blank">Александр</a>
                    </h2>
                    <p>Получите бесплатную косультацию. Мы ответим на все Ваши вопросы</p>
                    <ul class="ftco-footer-social list-unstyled mt-2"> 
                        <li><a href="https://www.instagram.com/alexandrov_service/" target="_blank"><span class="fa fa-instagram"></span></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 col-lg-2">
                <div class="ftco-footer-widget mb-4">
                    <h2 class="ftco-heading-2">Меню</h2>
                    <ul class="list-unstyled">
                        <li><a target="_blank" href="/"><span class="fa fa-chevron-right me-2"></span>Главная</a></li>
                        <li><a target="_blank" href="/repair-apartments-list-cities"><span class="fa fa-chevron-right me-2"></span>Города</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 col-lg-2">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Меню</h2>
                <ul class="list-unstyled">
                  <li><a target="_blank" href="/video"><span class="fa fa-chevron-right me-2"></span>Видео</a></li>
                  <li><a target="_blank" href="/apartment-repair/Moscow"><span class="fa fa-chevron-right me-2"></span>Москва</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg">
                <div class="ftco-footer-widget mb-4">
                    <h2 class="ftco-heading-2">Ответим на все ваши вопросы</h2>
                    <div class="block-23 mb-3">
                        <ul>
                            <li><span class="icon fa fa-map marker"></span><span class="text">Россия Москва Пресненская наб. 2</span></li>
                            <li><a href="tel:+79168411114"><span class="icon fa fa-phone"></span><span class="text">+7 9 168 41 11 14</span></a>
                                <a href="tel:+74956644418"><span class="icon fa fa-phone"></span><span class="text">+7 4 956 64 44 18</span></a>
                            </li>
                            <li><a href="mailto:sk.alexandr.2011@gmail.com"><span class="icon fa fa-paper-plane pr-4"></span><span class="text"><span>sk.alexandr.2011@gmail.com</span></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-5 pb-5  justify-content-between">
            <div class="col-md-6 col-lg-2" v-for="(item, index) in listCityes.engCityes" v-bind:key="index">
                <div class="">
                    <a v-bind:href="/apartment-repair/+item" class="color_grey">{{ listCityes.rusCityes[index] }}</a>
                </div>
            </div>
        </div> 
    </div>
    <div class="container-fluid px-0 py-5 bg-darken">
        <div class="container-xl">
            <div class="row">
                <div class="col-md-12 text-center">
                    <p class="mb-0" style="color: rgba(255,255,255,.5); font-size: 13px;">Copyright &copy; 2022 Все права защищены | Made <a href="https://skalexandr.000webhostapp.com/" target="_blank"><i class="fa fa-heart color-danger" aria-hidden="true"></i></a> by <a href="https://suzdalenko.com/it-developer/Moscow" target="_blank">S Developer</a></p>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>
<script>
import fileListCities  from '../repository/cities';
// import allCitityesApp from '../repository/allRusCities'; 
export default{
    data(){
        return{
            listCityes: {}, 
        }
    },
    created(){
        this.listCityes = fileListCities;
    },
    methods:{
        currentRoutePage(){
          this.insertTopScript();
          this.insertValuesData();
          return window.location.href;
        },
        
        
        // insert value script to header
        insertTopScript(){
            let elHead = document.getElementsByTagName('head')[0]; 
            let scripts = elHead.getElementsByTagName( 'script' );

            for(let i = 0; i < scripts.length; i++) {
                let sc = scripts[i];
                if(sc.type == 'application/ld+json') sc.remove();
            }

            let dataObj = { "@context": "http://schema.org", "@type": "WebSite" };
                dataObj['name'] = this.$store.state.cityPage;
                dataObj['url'] = window.location.href;

             let elScript = document.createElement('script');
             elScript.type = 'application/ld+json';

             elScript.text = JSON.stringify(dataObj);
             document.querySelector('head').appendChild(elScript);
        },


        insertValuesData(){
            let body = document.getElementsByTagName('body')[0];  
            let scripts = body.getElementsByTagName( 'script' );

            for(let i = 0; i < scripts.length; i++) {
                let sc = scripts[i];
                if(sc.type == 'application/ld+json') sc.remove();
            }
        
            let elScript = document.createElement('script');
                elScript.type = 'application/ld+json';
                let dataObj = {
                 "@context": "http://schema.org",
                 "@type": "RadioStation",
                 "image": [
                        {   "@type": "ImageObject",
                            "url": "https://skalexandr.ru/index_files/img/one-preson.webp"
                        },{
                            "@type": "ImageObject",
                            "url": "https://skalexandr.ru/index_files/img/one-preson.webp",
                            "width": 165,
                            "height": 165
                        },{
                            "@type": "ImageObject",
                            "url": "https://skalexandr.ru/index_files/img/one-preson.webp",
                            "width": 130,
                            "height": 130
                        },{
                            "@type": "ImageObject",
                            "url": "https://skalexandr.ru/index_files/img/one-preson.webp",
                            "width": 100,
                            "height": 100
                        },{
                            "@type": "ImageObject",
                            "url": "https://skalexandr.ru/index_files/img/one-preson.webp",
                            "width": 80,
                            "height": 80
                        },{
                            "@type": "ImageObject",
                            "url": "https://skalexandr.ru/index_files/img/one-preson.webp",
                            "width": 63,
                            "height": 63
                        }
                 ],
                    "name": this.$store.state.cityPage,
                    "url": window.location.href,
                    "sameAs": [],
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": 5,
                        "ratingCount": 15
                    },
                    "address": {
                        "@type": "PostalAddress"
                    },
                    "review": []
                };
                elScript.text = JSON.stringify(dataObj);
                body.appendChild(elScript);
        }
    }
}

</script>


