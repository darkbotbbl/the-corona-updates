<template>
    <div id="list-box">
        <!-- This is the div for the search box -->
        
        <b-alert class="mt-4" show variant="info" v-if="!rowClicked">Click on a row for details</b-alert>
        <h2 v-else class="countriesHeader text-center">Countries</h2>
        
        <input type="text" placeholder="Search (country name)" class="form-control" v-model="searchText">
        <div id="table">
        <b-table 
            :fields="fields"
            :items="countries"
            hover
            :filter="searchText"
            responsive="sm"
            striped
            dark
            :sort-by.sync="sortBy"
            sort-icon-left
            sticky-header
            class="w-100 d-block d-md-table"
            @row-clicked="data = $event"
        ></b-table>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../main.js'
    
    export default {
        data() {
            return {
                sortBy: 'Country',
                searchText: '',
                hover: true,
                dark: false,
                show: false,
                rowClicked:false,
                data:'',
                countriesHeader: 'countriesHeader',
                fields: [
                    {key: 'title', sortable: 'true'},
                    {key: 'total_cases', sortable: 'true'},
                    {key: 'total_deaths', sortable: 'true'},
                    {key: 'total_recovered', sortable: 'true'},
               ],
                countries: Array,
            }
        },
        created() {
            this.$http.get('https://api.thevirustracker.com/free-api?countryTotals=ALL')
                .then(response => {
                    return response.json() 
                })
                .then(data => {
                    this.countries = Array.from(Object.values(Object.values(data)[1]["0"]))
                    console.log(this.countries)
                })
        },
        watch: {
            // This is a watcher that is going to watch for changes in the data property that I have set
            // This changes which will be the new object(country) that will be clicked on, will be sent to the event bus 
            // so that the CountryDetailUpdate can pick it up and use it
            data(newData) {
                eventBus.$emit('rowHasBeenClicked', newData)
                
                // set the row clicked to true and emit it
                this.rowClicked = true
                eventBus.$emit('itemClicked', this.rowClicked)
            }
        }
    }
</script>

<style scoped>
#list-box {
    overflow-x: hidden;
    width: 100%;
}

@media only screen and (min-width: 760px) {
    #table {
        height: 60vh;
        overflow-y: auto;
    }
}

.g-alert {
    margin: 20px 0 0 0;
}

.countriesHeader {
    color: #487a23;
    text-decoration: underline;
    margin-top: 20px;
    margin-bottom: 15px;
    font-family: 'Lobster', cursive;
}

input {
    margin: 20px;
    width: 85%;
    position: relative;
    left: 4%;
}
</style>
