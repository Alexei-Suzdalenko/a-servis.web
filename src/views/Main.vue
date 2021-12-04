<template>
  <Header />
  <MainContent /> 
  <Footer />
  
</template>

<script>

import Header from '../components/Header.vue'
import MainContent from '../components/MainFiles/MainContent.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Main',
  components: { Header, MainContent, Footer }
}
</script>
