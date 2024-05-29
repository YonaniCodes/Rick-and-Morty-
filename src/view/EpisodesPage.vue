<script setup>
import gql from 'graphql-tag'
import { useFetch } from '../Queries';
import { useRoute,useRouter } from 'vue-router';
import Header from '../components/Header.vue';
const path="/characters/"
const router = useRouter();
  const useRouting = (path) => {
  router.push(path);
};

const getParameter=()=>{
    const route=useRoute()
    console.log(route.params.id)
    return route.params.id
}

 const Episodes_Query=gql`
 query {
  episode(id: ${getParameter()}) {
    episode
    name
    air_date
    characters {
      name
       id
      name
      status
      species
      gender
       image
 
    }
  }
    
} 
  `
  const  { result, loading, error }=  useFetch(Episodes_Query)
 
 </script>

<template>
    <Header/>
    <div v-if="error">Something went wrong</div>
    <div v-if="loading">Loading....</div>
    <div v-else>
     <div>
       <!-- <div class="epsode-number text-3xl  mt-4">Episode {{getParameter()}} </div> -->
       <div class="mt-32 text text-2xl">{{ result.episode.episode }} &#x2022;    {{ result.episode.name }}</div>
       <div class="releaseDate  mb-8  ">{{ result.episode.air_date }}</div>

 
      <div class="text-3xl border-r-4 inline pr-3">Characters in Episode {{ getParameter() }}</div>
      <div class="cast grid grid-cols-8 gap-4  ">
            <div v-for="character in  result.episode.characters">
            <div @click="useRouting(path+character.id)" class=" h-48 shadow p-4 " >
                <div class="image  "><img class="rounded-full" :src="character.image" alt=""></div>
                <div class="text-gray-500 text-center mt-1">{{ character.name }}</div>
            </div>
     
        </div>
      </div>
    </div>
    </div>
   </template>



<style  scoped>

</style>