import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { BootstrapVue, IconsPlugin, CardPlugin } from 'bootstrap-vue'
import App from './App.vue'

// import Bootstrap and BootstrapVue css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install the BootstrapVue
Vue.use(BootstrapVue)
// Install the IconsPlugin
Vue.use(IconsPlugin)
// Install the CardPlugin
Vue.use(CardPlugin)

// Install the VueResource for http requests
Vue.use(VueResource)

// Configure the router
Vue.use(VueRouter)

import { routes } from "./routes.js"

const router = new VueRouter({
    routes,
    mode: 'history',
})


export const eventBus = new Vue() // This is the eventBus that I will use to move data from component to component

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
