<template>
  <Header />
  <ListCitiesHeader />
  <CityContent />
  <CityAlexandrImages />
  <ApiImages />
  <Footer />
  
</template>

<script>
import Header from '../components/Header.vue'
import ListCitiesHeader from '../components/ListCitiesFiles/ListFilesHeader.vue'
import CityContent from '../components/CityFiles/CityContent.vue'
import CityAlexandrImages from '../components/CityFiles/CityAlexandrImages.vue';
import ApiImages from '../components/CityFiles/ApiImages.vue';
import Footer from '../components/Footer.vue'

export default {
  components: { Header, ListCitiesHeader, CityContent, CityAlexandrImages, ApiImages, Footer }
}
</script>