<template>
  <Header />
  <ListCitiesHeader />
  <ListCitiesContent />
  <Footer />
  
</template>

<script>

import Header from '../components/Header.vue'
import ListCitiesHeader from '../components/ListCitiesFiles/ListFilesHeader.vue'
import ListCitiesContent from '../components/Video/VideoContent.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Header, ListCitiesHeader, ListCitiesContent, Footer }
}
</script>
