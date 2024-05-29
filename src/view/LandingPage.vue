<script setup>
 import Header from '../components/Header.vue';
 import Carousel from '../components/Carousel.vue';
 import character from  '../components/CharacterCard.vue';
 import EpisodeCard from '../components/EpisodeCard.vue';
 import LocationCard from '../components/LocationCard.vue';
 
 </script>
<template> 
         <Header/> 
         <Carousel  class="p-0" />
         <character/>
         <EpisodeCard/>
         <LocationCard/>
  

 </template>
<style  scoped>

 
</style>