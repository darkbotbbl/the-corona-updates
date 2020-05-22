<template>
    <div id="list-box">
        <!-- This is the div for the search box -->

        <input type="text" placeholder="Enter the name of the country here" class="form-control" v-model="searchText">
        <b-table 
            :fields="fields"
            :items="items"
            hover
            :filter="searchText"
            responsive="sm"
            striped
            :sort-by.sync="sortBy"
            sort-icon-left
            sticky-header
            class="w-100 d-block d-md-table"
            @row-clicked="data = $event"
        ></b-table>    
    </div>
</template>

<script>
    import { eventBus } from '../main.js'
    
    export default {
        data() {
            return {
                sortBy: 'country',
                searchText: '',
                hover: true,
                dark: false,
                show: false,
                rowClicked:false,
                data:'',
                fields: [
                    {key: 'country', sortable: 'true'},
                    {key: 'totalCases', sortable: 'true'},
                    {key: 'totalDeaths', sortable: 'true'},
                    {key: 'totalRecoveries', sortable: 'true'},
                    {key: 'newCases', sortable: 'true'},
                    {key: 'newDeaths', sortable: 'true'},
                    {key: 'newRecoveries', sortable: 'true'},
                ],
                items: [
                    {country: 'Germany', totalCases: 2434, totalDeaths: 344, totalRecoveries: 1343, newCases: 33, newDeaths: 2, newRecoveries: 744},
                    {country: 'Albania', totalCases: 111, totalDeaths: 292, totalRecoveries: 10, newCases: 99, newDeaths: 1, newRecoveries: 90},
                    {country: 'Ghana', totalCases: 2432, totalDeaths: 441, totalRecoveries: 1343, newCases: 33, newDeaths: 2, newRecoveries: 744},
                    {country: 'South Africa', totalCases: 234, totalDeaths: 31, totalRecoveries: 1343, newCases: 33, newDeaths: 2, newRecoveries: 744},
                    {country: 'America', totalCases: 2433434, totalDeaths: 31, totalRecoveries: 1343, newCases: 33, newDeaths: 2, newRecoveries: 744},
                    {country: 'China', totalCases: 24324, totalDeaths: 31, totalRecoveries: 1343, newCases: 33, newDeaths: 2, newRecoveries: 744},
                ]
            }
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

input {
    margin: 20px;
    width: 85%;
    position: relative;
    left: 4%;
}
</style>
