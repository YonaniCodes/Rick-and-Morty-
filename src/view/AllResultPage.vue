<script setup>
import SearchBarSHeader from '../components/SearchBar.vue';
import navBars from '../components/navBars.vue';
import {ref,watch} from 'vue'
import {useRoute} from 'vue-router'
import ActorProfile from '../components/ActorProfile.vue';
import webResult from '../components/webResult.vue';
import data from '../data/data.json'
const route= useRoute()
let filteredData
const onSearchQuery=(searchQuery)=>{
   filteredData= data.find((data)=> data.name.toLowerCase().includes(searchQuery))
 }
 
 
</script>

<template>
 
 <SearchBarSHeader @searchQuery="onSearchQuery"  />
  <navBars />
   <ActorProfile :data="filteredData" />
    
  <webResult/>
</template >



<style   scoped>

</style>