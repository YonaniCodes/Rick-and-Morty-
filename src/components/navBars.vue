<script setup>
 import {useRouter, useRoute} from 'vue-router'
 const router= useRouter()
 const route= useRoute()
 
 const navigate=(nav)=>{
  router.push(`/${nav}/${route.params.query}`)

 }
 
</script>

<template>
  <div class="nav-menues mt-24 pb-1  border-b    text-gray-500 ">
      <span  @click="navigate('all')" class="nav-menue">All</span>
      <span @click="navigate('images')" class="nav-menue">Images</span>
      <span class="nav-menue">Videos</span>
      <span class="nav-menue">News</span>
      <span class="nav-menue">Shopping</span>
      <span class="nav-menue">⋮ More</span>
    </div>
</template>



 