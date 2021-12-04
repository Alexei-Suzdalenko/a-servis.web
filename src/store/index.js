import { createStore } from 'vuex';

export default createStore({
  state: {
    titleRu: 'titleRu',
    titleEn: 'titleEn',
    count: 1,
    cityPage: 'Строительная Компания Александр',
  },
  mutations: {
   // increment (state, payload) { state.count = state.count + payload; },
    setCityPage(state, payload){ state.cityPage = payload; },
    setCityTitleRu(state, payload){ state.titleRu = payload; }
  },
  actions: {
  //  increment (context, payload) { context.commit('increment', payload) }
  },
  modules: {
  },
})


// show variables this.$store.state.titleRu
//   // this.$store.commit('increment', 123);
       // alert(this.$store.state.count)
       // this.$store.dispatch('increment', -1000)
       // alert(this.$store.state.count)