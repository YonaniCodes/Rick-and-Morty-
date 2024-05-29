<template>
    <Header/>
    <div v-if="error">Something went wrong...</div>
    <div v-if="loading">Loading...</div>
    <div v-else >  
      <div class="text-3xl ">
         {{ result.location.name}}
     </div>
     <div>Dimension: {{ result.location.dimension }}</div>
     <div>Type: {{ result.location.type }}</div>
     <div class="text-4xl flex items-center mr-4 mt-16"> 
      <div class="bg-secondary w-1 h-8 mr-2"></div>
      Resident in      {{ result.location.name}}
      
    </div>
     <div class="cast grid grid-cols-8 gap-4 mt-10 ">
      <div v-for="resident in  result.location.residents">
            <div @click="useRouting(path+resident.id)" class=" h-48 shadow p-4 " >
                 <div class="image  "><img class="rounded-full" :src="resident.image" alt=""></div>
                <div class="text-gray-500 text-center mt-1">{{ resident.name }}</div>
            </div>
     
      </div>
     </div>
</div>
     <!-- <CharacterAvatar :path="path"/> -->
</template>

<script setup>
import CharacterAvatar from '../components/CharacterAvatar.vue';
import Header from  '../components/Header.vue';
import { useRouter } from 'vue-router';
 import { getParameter } from '../router/methods';
  
 import gql from 'graphql-tag';
 import { useQuery } from '@vue/apollo-composable';
 const router = useRouter();
 const useRouting = (path) => {
  router.push(path);
};
 const path="/characters/"
 const LOCATION_QUERY= gql`
 query Locations  {
   location(id: ${getParameter()}){
      id
      name 
      dimension
      type
      residents{
        id
        name
        image
      }
    }
  }
 ` 
 const {result,loading,error}=useQuery(LOCATION_QUERY)
</script>

<style lang="scss" scoped>

</style>