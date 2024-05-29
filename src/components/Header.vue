<template>
    <header class="border flex items-center  pl-6 h-20  z-10 fixed left-0 right-0 top-0 bg-white ">
    <img @click="router.push(`/`)" src="./logo.png" alt="cln" class="w-40">
    <!-- <div class="log text-sky-600 text-2xl">Rick and Morty</div> -->
    <!-- <div class="nav-menues flex w-96 justify-between">
        <a href="#characters"  class="nav text-2xl cursor-pointer " >Characters</a>
        <a href="#episodes"  @click="router.push(`/character`)" class="nav text-2xl cursor-pointer  " >Episodes</a>
        <a  href="#locations"   @click="router.push(`/character`)" class="nav text-2xl cursor-pointer  " >Locations</a>
    </div> -->
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router=useRouter()

</script>

<style  scoped>
 
</style>