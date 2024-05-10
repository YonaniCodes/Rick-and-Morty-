<script setup>

import SearchBarSHeader from '../components/SearchBar.vue';
import navBars from '../components/navBars.vue';
import image from '../components/image.vue';
import {useRoute} from 'vue-router'
import data from '../data/data.json'
const route= useRoute()
const searchQuery=route.params.query
let filteredData =  data.find((data)=> data.name.toLowerCase().includes(searchQuery))
console.log('images')
</script>
<template>
    <image/>
    <image/>
    <image/>
    <image/>
    <image/>
    <image/>

    <image/>
  <!-- {{filteredData}} -->
  <!-- <SearchBarSHeader/>
  <navBars/> -->

  
</template>


<style lang="scss" scoped>

</style>