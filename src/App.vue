<template>
    <div>
        <b-container>
            <h1 class="text-center" id="headerFont">The Corona Updates Arena</h1>
            <app-header></app-header>
            <router-view></router-view> 
            <div id="devNote">
                <p>Designed and Coded by gRockson</p>
            </div>
        </b-container>
    </div>
</template>

<script>

import Header from './components/Header.vue'
import { eventBus } from './main.js'

export default {
    name: 'App',
    data() {
        return {
            headerFont: "headerFont"
        }
    },
    components: {
        appHeader:Header
    },
    created() {
        eventBus.$on('itemClicked', (rowClicked) => {
            this.showDetail = rowClicked  
        })
    },
}  
</script>

<style>

body {
    background-color: #f5f5f5;    
}

#devNote { 
    font-family: 'Lobster', cursive;
    font-size: 20px;
    postion: absolute;
    bottom: 0;
}



#headerFont {
    font-family: 'Tangerine', 'cursive';
    font-weight: bolder;
    color: #c43d10;
}

</style>
