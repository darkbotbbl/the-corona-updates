<template>
    <div id="detail-box">
        <h3 class="text-center">{{ country.Country }}</h3>
        <p>Total Cases: {{ country.TotalConfirmed }}</p>
        <p :class="red">Total Deaths: {{ country.TotalDeaths }}</p>
        <p :class="green">Total Recoveries: {{ country.TotalRecovered }}</p>
        <p>New Cases: {{ country.NewConfirmed }}</p>
        <p :class="red">New Deaths: {{ country.NewDeaths }}</p>
        <p :class="green">New Recoveries: {{ country.NewRecovered }}</p>
    </div>
</template>

<script>
    import { eventBus } from '../main.js'

    export default {
        data() {
            return {
                country: '',
                red: 'redColor',
                green: 'greenColor',
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

@media only screen and (min-width: 1100px){ 
    #detail-box {
        height: 60vh;
    }

    #detail-box p {
        font-size: 20px;
        font-family: cursive;
        padding: calc(18vh / 6) 0 0 0;
    }
}

.redColor {
    color: red;
}

.greenColor {
    color: green;
}
</style>
