<template>
    <div id="global-box">
        <h2 class="text-center globalHeader">Global Status</h2>
        <div>
            <b-card-group deck>
                <b-card header-bg-variant="primary" header="Total Cases" header-text-variant="white" border-variant="primary" class="text-center" body-tag="h3" header-tag="h2">
                    <b-card-text>{{ global["total_cases"] }}</b-card-text>
                </b-card>

                <b-card header-bg-variant="success" header="Total Recovered" header-text-variant="white" border-variant="success" class="text-center" header-tag="h2" body-tag="h3">
                    <b-card-text>{{ global["total_recovered"] }}</b-card-text>
                </b-card>

                <b-card header-bg-variant="danger" header="Total Deaths" header-text-variant="white" border-variant="danger" class="text-center" header-tag="h2" body-tag="h3">
                    <b-card-text>{{ global["total_deaths"] }}</b-card-text>
                </b-card>
            </b-card-group>
        </div>
        <div class="mt-4">
            <b-card-group deck>
                <b-card header-bg-variant="warning" header="Total Unresolved" header-text-variant="white" border-variant="warning" class="text-center" header-tag="h2" body-tag="h3">
                    <b-card-text>{{ global["total_unresolved"] }}</b-card-text>
                </b-card>

                <b-card header-bg-variant="dark" header="Total Active Cases" header-text-variant="white" border-variant="dark" class="text-center" header-tag="h2" body-tag="h3">
                    <b-card-text>{{ global["total_active_cases"] }}</b-card-text>
                </b-card>

                <b-card header-bg-variant="danger" header="Total Serious Cases" header-text-variant="white" border-variant="danger" class="text-center" header-tag="h2" body-tag="h3">
                    <b-card-text>{{ global["total_serious_cases"] }}</b-card-text>
                </b-card>
            </b-card-group>
        </div>
        <div class="mt-4">
            <b-card-group deck>
                <b-card header-bg-variant="primary" header="Total New Cases Today" header-text-variant="white" border-variant="primary" class="text-center" header-tag="h2" body-tag="h3">
                    <b-card-text>{{ global["total_new_cases_today"] }}</b-card-text>
                </b-card>

                <b-card header-bg-variant="danger" header="Total New Deaths Today" header-text-variant="white" border-variant="danger" class="text-center" header-tag="h2" body-tag="h3">
                    <b-card-text>{{ global["total_new_deaths_today"] }}</b-card-text>
                </b-card>

                <b-card header-bg-variant="secondary" header="Total Affected Countries" header-text-variant="white" border-variant="secondary" class="text-center" header-tag="h2" body-tag="h3">
                    <b-card-text>{{ global["total_affected_countries"] }}</b-card-text>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                global: '',
                globalHeader: 'globalHeader'
            }
        },
        created() {
            this.$http.get('https://api.thevirustracker.com/free-api?global=stats')
                .then(response => { 
                    return response.json()
                })
                .then(data => {
                    this.global = Object.values(data.results)[0]
                    console.log(this.global)
                })
                //.then(errors => {   
                  //  console.log(errors)
                //})
            }
    }
</script>

<style scoped>
#global-box {
    margin: 20px;
}

.globalHeader {
    color: #487a23;
    text-decoration: underline;
    margin-bottom: 15px;
    font-family: 'Lobster', cursive;
}
</style>
