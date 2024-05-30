<script setup>
 import Header from '../components/Header.vue';
 import Carousel from '../components/Carousel.vue';
 import character from  '../components/CharacterCard.vue';
 import EpisodeCard from '../components/EpisodeCard.vue';
 import LocationCard from '../components/LocationCard.vue';
 import Description from '../components/Description.vue';
 
 </script>
<template> 
         <Header/> 
         <Carousel  class="p-0" />
          <Description/>
         <character/>
         <EpisodeCard/>
         <LocationCard/>
  

 </template>
<style  scoped>

 
</style>