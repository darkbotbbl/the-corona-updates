<template>
    <div>
        <b-container>
            <!-- Row of the global update -->
            <b-row>
                <b-col>
                    <global-update></global-update>
                </b-col>
            </b-row>

            <!-- Row of the Stuff about the countries -->
            <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="2">
                <!-- Column of the country detail update -->
                <b-col lg="4" v-show="showDetail">
                    <country-detail-update></country-detail-update>
                </b-col>

                <!-- Column of the counry list update -->
                <b-col lg="8">
                    <countries-list-update></countries-list-update>
                </b-col>
                
            </b-row>
        </b-container>
    </div>
</template>

<script>

import CountriesListUpdate from './components/CountriesListUpdate.vue'
import CountryDetailUpdate from './components/CountryDetailUpdate.vue'
import GlobalUpdate from './components/GlobalUpdate.vue'
import { eventBus } from './main.js'

export default {
    name: 'App',
    data() {
        return {
            showDetail: false
        }
    },
    created() {
        eventBus.$on('itemClicked', (rowClicked) => {
            this.showDetail = rowClicked  
        })
    },
    components: {
        countriesListUpdate: CountriesListUpdate,
        countryDetailUpdate: CountryDetailUpdate,
        globalUpdate: GlobalUpdate,
    }
}
</script>

<style>
</style>
