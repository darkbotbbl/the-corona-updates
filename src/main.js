import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

// import Bootstrap and BootstrapVue css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install the BootstrapVue
Vue.use(BootstrapVue)
// Install the IconsPlugin
Vue.use(IconsPlugin)

export const eventBus = new Vue() // This is the eventBus that I will use to move data from component to component

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
