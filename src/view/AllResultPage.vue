<script setup>
import SearchBarSHeader from '../components/SearchBar.vue';
import navBars from '../components/navBars.vue';
import {ref,watch} from 'vue'
import {useRoute} from 'vue-router'
import ActorProfile from '../components/ActorProfile.vue';
import webResult from '../components/webResult.vue';
import data from '../data/data.json'
const route= useRoute()
const searchQuery= ref(route.params.query )
let filteredData =  data.find((data)=> data.name.toLowerCase().includes(searchQuery.value))
const {web}=filteredData

const onSearchQuery=(searchQuery)=>{
   filteredData.value= data.find((data)=> data.name.toLowerCase().includes(searchQuery))
   console.log(filteredData.value)

 }
 
</script>

<template>
 
 <SearchBarSHeader @searchQuery="onSearchQuery"  />
  <navBars />
   <ActorProfile :filteredData="filteredData" />
 
    
  <webResult :web="web"/>
</template >



<style   scoped>

</style>