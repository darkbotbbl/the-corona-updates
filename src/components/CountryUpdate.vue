<template>
    <b-container>
        <b-row cols="1" cols-lg="2">
            <b-col >
                <countries-list-update></countries-list-update>
            </b-col>
            <b-col>
                <country-detail-update></country-detail-update>
            </b-col>
        </b-row>
    </b-container>
</template>


<script>
    import CountriesListUpdate from "./CountriesListUpdate.vue"
    import CountryDetailUpdate from "./CountryDetailUpdate.vue"

    export default {
        components: {
            countriesListUpdate: CountriesListUpdate,
            countryDetailUpdate: CountryDetailUpdate,
        }
    }
</script>

<style>


</style>
