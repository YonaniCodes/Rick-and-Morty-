<script setup>
 import { truncate } from '../utils/string.js';
import {useFetch} from '../Queries/index.js'
import gql from 'graphql-tag'
import { useRouter} from "vue-router";
const router = useRouter();
const useRouting = (path) => {
  router.push(path);
};
 const path="/characters/"
 const CHARACTERS_QUERY = gql`

 query Characters  {
    characters {
      results {
       id
      name
      status
      species
      gender
      origin{name}
       image
 
      }
    }
  }
` 
const  { result, loading, error }=useFetch( CHARACTERS_QUERY)

 </script>



<template>

<p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <div v-else   >
     <div class="text-4xl flex items-center mr-4 mt-10"> <div class="bg-secondary w-1 h-8 mr-2"></div>Characters  </div>
    <div class="grid grid-cols-3 gap-4 mt-10"  >
        <div  v-for="character in result.characters.results" >
            <div @click="useRouting(`${path}${character.id}`)" class="border   flex flex-col items-center shadow-lg  p-4 h-50">
              <div class="flex items-center">
                <div class="w-1/3 h-1/3  mr-6  ">        
                     <img class="rounded-full w-full h-full" :src="character.image" alt="" srcset="">
                </div>
         
                 <div>  
                  <div class="text-2xl mt-2 text-primary">{{truncate(character.name,14)}}</div>
                  <div class="text-center text-gray-500 mt-2">{{ character.gender }}  &#x2022; {{ character.species }}</div>
                 </div>
              </div>
                    

                 <button class="bg-btn px-6 py-2 rounded-3xl text-white mt-4">View More ></button>
            </div>
         

 
    </div>
    </div>
  </div>  
    
 
</template>


 
 