<template>
    <div>
        <b-container>
            <h1 class="text-center" id="headerFont">The Corona Updates Arena</h1>
            <app-header></app-header>
            <router-view></router-view> 
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

#headerFont {
    font-family: 'Tangerine', 'cursive';
    color: #c43d10;
}

</style>
