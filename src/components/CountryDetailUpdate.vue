<template>
    <div id="detail-box" v-show="itemClicked">
        <h3 class="text-center">{{ country.title }}</h3>
        <div>
            <b-card-group deck>
                <b-card header="Total Cases" class="text-center" header-bg-variant="primary" header-text-variant="white" border-variant="primary" body-tag="h4">
                    <b-card-text>{{ country.total_cases }}</b-card-text>
                </b-card>
                <b-card header="Total Recovered" class="text-center" header-bg-variant="success" header-text-variant="white" border-variant="success" body-tag="h4">
                    <b-card-text>{{ country.total_recovered }}</b-card-text>
                </b-card>
            </b-card-group>
        </div>
        <div class="mt-1">
            <b-card-group deck>
                <b-card header="Total Unresolved" class="text-center" header-bg-variant="warning" header-text-variant="white" border-variant="warning" body-tag="h4">
                    <b-card-text>{{ country.total_unresolved }}</b-card-text>
                </b-card>
                <b-card header="Total Deaths" class="text-center" header-bg-variant="dark" header-text-variant="white" border-variant="dark" body-tag="h4">
                    <b-card-text>{{ country.total_deaths }}</b-card-text>
                </b-card>
            </b-card-group>
        </div>
        <div class="mt-1">
            <b-card-group deck>
                <b-card header="Total New Cases" class="text-center" header-bg-variant="primary" header-text-variant="white" border-variant="primary" body-tag="h4">
                    <b-card-text>{{ country.total_new_cases_today }}</b-card-text>
                </b-card>
                <b-card header="Total New Deaths" class="text-center" header-bg-variant="danger" header-text-variant="white" border-variant="danger" body-tag="h4">
                    <b-card-text>{{ country.total_new_deaths_today }}</b-card-text>
                </b-card>
            </b-card-group>
        </div>
        <div class="mt-1">
            <b-card-group deck>
                <b-card header="Total Active Cases" class="text-center" header-bg-variant="warning" header-text-variant="white" border-variant="warning" body-tag="h4">
                    <b-card-text>{{ country.total_serious_cases }}</b-card-text>
                </b-card>
                <b-card header="Total Serious Cases" class="text-center" header-bg-variant="danger" header-text-variant="white" border-variant="danger" body-tag="h4">
                    <b-card-text>{{ country.total_active_cases }}</b-card-text>
                </b-card>
            </b-card-group>
        </div>

    </div>
</template>

<script>
    import { eventBus } from '../main.js'

    export default {
        data() {
            return {
                itemClicked: false,
                country: '',
            }
        },
        created() {
            eventBus.$on('rowHasBeenClicked', (newData) => {
                this.country = newData;
            })
            eventBus.$on('itemClicked', (rowClicked) => {
                this.itemClicked = rowClicked
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
        height: 80vh;
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
