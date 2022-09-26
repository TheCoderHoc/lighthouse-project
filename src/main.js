import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './assets/main.css'
import App from './App.vue'
import EasySlider from 'vue-easy-slider'

Vue.use(EasySlider)
Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)

new Vue({
  render: (h) => h(App)
}).$mount('#app')