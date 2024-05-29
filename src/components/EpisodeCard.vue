<script setup>
import { truncate } from "../utils/string";
import { useRouter } from "vue-router";
const router=useRouter()
 const useRouting = (path) => {
  router.push(path);
};
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
const path="/episodes/"
const EPISODES_QUERY = gql`
query Episodes  {
   episodes{
    results{
      id
      name
      characters{name}
      episode
    }
  }
  }

`
const { result, loading, error } = useQuery(EPISODES_QUERY);
</script>

<template>
    <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <div v-else   >
    <div class="text-4xl flex items-center mr-4 my-10"> <div class="bg-secondary w-1 h-8 mr-2"></div>Episodes  </div>
    <div class="grid grid-cols-3 items-center gap-2">
        <div class=""  v-for="(episode) in result.episodes.results">
          <div @click="useRouting(`/episodes/${episode.id}`)" class="border py-2 shadow-lg px-2 flex items-center justify-between hover:text-secondary cursor-pointer">{{ episode.episode }} &#x2022;  {{ truncate(episode.name) }} <img class="w-5" src="./television.svg" alt=""></div> 
       </div>

    </div>
  </div> 
</template>
<style   scoped>

</style>