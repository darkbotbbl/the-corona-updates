<template>
    <div id="global-box">
        <h2>Global Status</h2>
        <b-row cols="1" cols-md="2">

            <!-- this is the column for daily cases, you are going to fill them dynamically with data fetched from an api -->
            <b-col>
                <b-row>
                    Total Cases: {{ global.TotalConfirmed }}
                </b-row>
                <b-row>
                    Total Deaths: {{ global.TotalDeaths }}
                </b-row>
                <b-row>
                    Total Recoveries: {{ global.TotalRecovered }}
                </b-row>
            </b-col>
            
            <!-- this is the column for new data, say daily updates, you are going to fill it dynamically with data -->
            <b-col>
                <b-row>
                    New Cases: {{ global.NewConfirmed }}
                </b-row>
                <b-row>
                    New Deaths: {{ global.NewDeaths }}
                </b-row>
                <b-row>
                    New Recoveries: {{ global.NewRecovered }}
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                global: '',
            }
        },
        created() {
            this.$http.get('https://api.covid19api.com/summary')
                .then(response => { 
                    return response.json()
                })
                .then(data => {
                    this.global = data.Global
                })
                .then(errors => {   
                    console.log(errors)
                })
            }
    }
</script>

<style scoped>
#global-box {
    margin: 20px;
}
</style>
