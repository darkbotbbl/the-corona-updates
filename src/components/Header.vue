<template>
<ul class="nav nav-tabs">
        <router-link to="/" tag="li" class="nav-link link" active-class="active" exact>The World</router-link> 
        <router-link to="/countries" tag="li" class="nav-link link" active-class="active">Countries</router-link>     
    </ul>
</template>

<style>
.link {
    cursor: pointer;
}
</style>
