<template>
    <nav class="navbar navbar-expand-lg  ftco-navbar-light">
    <div class="container-xl">
        <a class="navbar-brand aside-stretch align-items-center alexei_a" v-bind:href="currentRoute()" target="_blank">Александр</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars"></span> Меню
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item"><router-link v-bind:class="mainPage" to="/">Главная</router-link></li>
                <li class="nav-item"><router-link v-bind:class="citiesPage" to="/repair-apartments-list-cities">Города</router-link></li>
                <li class="nav-item"><router-link v-bind:class="moskowPage" to="/apartment-repair/Moscow">Москва</router-link></li>
                <li class="nav-item"><router-link v-bind:class="video" to="/video">Видео</router-link></li>
            </ul>
        </div>
    </div>
</nav>
</template>
<script>
import fileListCities  from '../repository/cities';
export default{
    data(){
        return{
            mainPage: 'nav-link active alexei_a',
            normalPage: 'nav-link',
        }
    },
    created(){
        
    },
    methods:{
        currentRoute(){
            let routeApp = this.$route.path ;
            switch(routeApp){
                case '/':
                    this.mainPage = 'nav-link active alexei_a';
                    this.citiesPage = 'nav-link';
                    this.moskowPage = 'nav-link';
                    this.video = 'nav-link';

                    document.title = 'Строительная Компания Александр';
                    this.$store.commit('setCityPage', 'Строительная Компания Александр');
                
                    break;    
                case '/repair-apartments-list-cities':
                    this.mainPage = 'nav-link';
                    this.citiesPage = 'nav-link active alexei_a';
                    this.moskowPage = 'nav-link';
                    this.video = 'nav-link';

                    document.title = 'Ремонт Квартир Московская область';
                    this.$store.commit('setCityPage', 'Ремонт Квартир Московская область');
                    this.$store.commit('setCityTitleRu', ' ГОРОДА Московская область');

                    break;
                case '/apartment-repair/Moscow':
                    this.mainPage = 'nav-link';
                    this.citiesPage = 'nav-link';
                    this.video = 'nav-link';
                    this.moskowPage = 'nav-link active alexei_a';

                    document.title = 'Ремонт Квартир Москва';
                    this.$store.commit('setCityPage', 'Ремонт Квартир Москва');
                    this.$store.commit('setCityTitleRu', 'Москва');                    

                    break;
                case '/video':
                    this.mainPage = 'nav-link';
                    this.citiesPage = 'nav-link';
                    this.video = 'nav-link active alexei_a';
                    this.moskowPage = 'nav-link';

                    document.title = 'Видео Ремонт Квартир Москва, Строительная Компания Александр';
                    this.$store.commit('setCityPage', 'Видео Ремонт Квартир Москва, Строительная Компания Александр');
                    this.$store.commit('setCityTitleRu', ' Видео');
                   
                    break;      
                default:
                    this.mainPage = 'nav-link';
                    this.citiesPage = 'nav-link';
                    this.moskowPage = 'nav-link';
                    this.video = 'nav-link';
                    
                     for(let i = 0; i < fileListCities.engCityes.length; i++){
                     if(this.$route.params.city == fileListCities.engCityes[i]){
                        this.$store.commit('setCityTitleRu', fileListCities.rusCityes[i]);
                        document.title = 'Ремонт Квартир ' + fileListCities.rusCityes[i];
                     }
                } 
            }
            window.scrollTo(0,0);
            return routeApp;
        }
    }

}
</script>
