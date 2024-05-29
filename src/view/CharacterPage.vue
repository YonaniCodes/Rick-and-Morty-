<script setup> 
import { truncate } from "../utils/string";
import { useRoute,useRouter} from "vue-router";
import gql from 'graphql-tag'
import { useFetch } from '../Queries';
import Header from "../components/Header.vue";
const router = useRouter();
const useRouting = (path) => {
  router.push(path);
};
const getParameter=()=>{
    const route=useRoute()
    console.log(route.params.id)
    return route.params.id
}

 const CHARACTER_QUERY=gql`
 query  {
  character(id: ${getParameter()}) {
    created
    gender
    id
    image
    name
    species
    status
    location{
      name
    }
    episode {
      name
      id
      episode
    }
   
    origin{
      name
    }
 

  }
}
`
const returnStatus=(status)=>{
  // status=status.toUpperCase()
  if(status.includes("Alive"))
     return "Alive"
  if(status.includes("Unknown"))
     return "Unknown"
  if(status.includes("Dead"))
   return "Dead"
}

const  { result, loading, error }=useFetch(CHARACTER_QUERY)

const getTolalEpisode=(episodes)=>{
if(episodes.length===1)
return "1 Episode"
return episodes.length +" episodes "
}
 </script>

<template>
 
 <Header/>
 
  <div v-if="error">Something went wrong...</div>
  <div v-if="loading">Loading...</div>
  <div v-else >  
      <div class="mx-24 w-2/3 border flex mt-32 ">

         <div class="img mr-10 relative border">
          <img class="h-full" :src="result.character.image" alt="">
          <div class="absolute bottom-3 left-2 opacity-70">
          <div class=" status  rounded-2xl   px-4 py" 
            :class="{ alive:`Alive`===returnStatus(result.character.status),
                      unknown:`Unknown`===returnStatus(result.character.status),
                      dead:`Dead`===returnStatus(result.character.status),
                    }"> 
             {{result.character.status}}
        </div>
    </div> 
         </div>
         <div>
           <div class="name text-3xl">{{ result.character.name }}</div>
           <div> {{ result.character.gender}} &#x2022; {{ result.character.species }}</div>
           <div>
               <div class="text-2xl mt-4">First seen:</div>
            <span > {{result.character.origin.name}} </span>
           </div>  
            <div>
               <div  class="text-2xl mt-4" >
                Last seen:
               </div>
               <span> {{ result.character.location.name }}</span>

            </div>
            <div class="mt-4"> {{ result.character.name }} appeared in {{ getTolalEpisode( result.character. episode)}}</div>
         </div>
      </div>
      <div class="text-4xl flex items-center mr-4 mt-16 mx-24"> 
         <div class="bg-secondary w-1 h-8 mr-2"></div>
        Episodes {{result.character.name }} Appeared
      
      </div>    
      <div class="mx-24 grid grid-cols-3 gap-4 mt-8">
      <div v-for="episode in result.character.episode">  
        <div @click="useRouting(`/episodes/${episode.id}`)" class="border py-2 shadow px-2 flex items-center justify-between hover:text-secondary cursor-pointer">{{ episode.episode }} &#x2022;  {{ truncate(episode.name) }} <img class="w-5" src="./television.svg" alt=""></div>   </div>
     </div>  
  </div>
 
 </template>

 
<style   scoped>
.status{
 background-color: rgb(255, 255, 255);
 color: black;
}
.dead{
  background-color: brown;
  color: white
}
.alive{
  background-color: green;
  color: white;
}

</style>