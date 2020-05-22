<template>
    <div id="detail-box">
        <b-card :title="country.country">
            <p>Total Cases: {{ country.totalCases }}</p>
            <p>Total Deaths: {{ country.totalDeaths }} </p>
            <b-card-text>Total Recoveries: {{ country.totalRecoveries }} </b-card-text>
            <b-card-text>New Cases: {{ country.newCases }}</b-card-text>
            <b-card-text>New Deaths: {{ country.newDeaths }} </b-card-text>
            <b-card-text>New Recoveries: {{ country.newDeaths }} </b-card-text>
        </b-card>
    </div>
</template>

<script>
    import { eventBus } from '../main.js'

    export default {
        data() {
            return {
                country: ''
            }
        },
        created() {
            eventBus.$on('rowHasBeenClicked', (newData) => {
                this.country = newData;
            })
        }
    }
</script>

<style scoped>
#detail-box {
    margin: 20px 0 0 0;
}

title {
    text-align: center;
}
</style>
