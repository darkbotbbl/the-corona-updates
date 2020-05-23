<template>
    <b-container>
        <country-detail-update></country-detail-update>
        <countries-list-update></countries-list-update>
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
