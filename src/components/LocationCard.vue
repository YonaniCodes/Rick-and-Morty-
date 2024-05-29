<script setup>
import {ref, watch} from 'vue'
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { useRouter } from "vue-router";
import { getParameter } from "../router/methods";
const path="/locations/"
const router=useRouter()
 const useRouting = (path) => {
  router.push(path);
};
let page= ref(1)
const LOCATIONS_QUERY = gql`
query Locations  {
   locations(page:${page.value}){
    info{pages}
    results{
      id
      name     
    }
  }
  }

`
const { result, loading, error } = useQuery(LOCATIONS_QUERY)

 const fetchData=()=>{
  const { result, loading, error } = useQuery(LOCATIONS_QUERY)
}
 
 </script>

<template>
  <div v-if="loading">Loading</div>
  <div v-else-if="error">Something went Wrong</div>
  <div v-else>
    <div class="text-4xl flex items-center mr-4 mt-16"> 
      <div class="bg-secondary w-1 h-8 mr-2"></div>
      Locations   
      <!-- <div class="flex ml-auto ">
        <div v-for="index in result.locations.info.pages"> 
           <button @click="page=index" class="mr-4 border w-16 text-2xl">{{ index }}</button>
      </div>
      </div>   -->
     
    </div>
    <div class="grid grid-cols-3 gap-4 mt-10">
      <div v-for="location in result.locations.results" :key="location.id">
       <div @click="useRouting(`${path}${location.id}`)" class=" shadow-lg   ">
        <div class="location flex items-center justify-between p-2 cursor-pointer hover:text-secondary"> {{ location.name }} <img class="w-6" src="./location.png" alt=""></div> 
       </div>
    </div>
    </div>

  </div>
    
 </template>



<style   scoped>

</style>