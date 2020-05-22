<template>
    <div id="global-box">
        <h2>Global Status</h2>
        <b-row cols="1" cols-md="2">

            <!-- this is the column for daily cases, you are going to fill them dynamically with data fetched from an api -->
            <b-col>
                <b-row>
                    Total Cases: {{ global.totalCases }}
                </b-row>
                <b-row>
                    Total Deaths: {{ global.totalDeaths }}
                </b-row>
                <b-row>
                    Total Recoveries: {{ global.totalRecoveries }}
                </b-row>
            </b-col>
            
            <!-- this is the column for new data, say daily updates, you are going to fill it dynamically with data -->
            <b-col>
                <b-row>
                    New Cases: {{ global.newCases }}
                </b-row>
                <b-row>
                    New Deaths: {{ global.newDeaths }}
                </b-row>
                <b-row>
                    New Recoveries: {{ global.newRecoveries }}
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                global: {
                    totalCases: 5119923, totalDeaths: 180000, totalRecoveries: 1200234,
                    newCases: 19882, newDeaths: 1344, newRecoveries: 113449,
                }
            }
        }
    }
</script>

<style scoped>
#global-box {
    margin: 20px;
}
</style>
