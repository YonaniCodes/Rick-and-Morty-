<script setup>
import { defineProps } from 'vue';
const {web} = defineProps(['web'])

</script>

<template>
    <div class="web-result grid grid-cols-2 ml-8 mt-10 v" v-for="webResult in web">
    <div>
        <div class="flex items-center">
            <img :src="webResult.favicon" alt="" class="favicon w-6">
            <div class="ml-4">
              <div class="web-title"> {{webResult.name}}</div>
              <a :href="webResult.URL" class="web-url text-xs"> {{webResult.URL}}: </a>

            </div>
       </div>
       
       <div class="result">
          <a class="text-blue-800 text-lg" :href="webResult.URL">{{webResult.title}}</a>
          <div class="text-gray-500">
            {{webResult.text}}          
          </div>
       </div>
    </div>
       
     </div>
</template>



<style scoped>

</style>