import GlobalUpdate from './components/GlobalUpdate.vue'
import CountryUpdate from './components/CountryUpdate.vue'

export const routes = [
    { path: '/', component: GlobalUpdate },
    { path: '/countries', component: CountryUpdate },
]
