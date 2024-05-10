<script setup>
 import {ref,watch,defineEmits} from 'vue'
 import {useRouter,useRoute} from 'vue-router'
 
 const searchQuery= ref("")
 const showCancleBtn=ref(false)
 const route= useRoute()
 const emit=defineEmits(['searchQuery'])
 const changeStyle= route.params.query
 const router= useRouter()
 const emptySearchQuery= ()=>{
    searchQuery.value=""
 }

 watch(searchQuery,()=>{
      if(searchQuery.value !== "")
      showCancleBtn.value=true
    else
      showCancleBtn.value=false
 })
  const navigateToAllResult=()=>{
      if(searchQuery.value !== ""){
        router.push(`/All/${searchQuery.value}`)
       emit('searchQuery',searchQuery.value)
      }
   
      emptySearchQuery()
 }
</script>

<template>
      <div :class="{'result-header':changeStyle}">
        <div :class="{'flex w-600 items-center': changeStyle}">
            <div class="branding my-4  " :class="{'w-20':changeStyle}">
               <img class=" horizonatal-center w-72 " src="../assets/logo.png" alt="" srcset=""> 
            </div>

            <div class="horizonatal-center search-bar  "
               :class="{'header-searchbar':changeStyle}">  
               <button>
                 <img class="h-4 " src="../assets/magnifying-glass-solid.svg" alt="">
               </button>
                <input 
                v-model.trim="searchQuery"
                @keyup.enter="navigateToAllResult"
                 class="h-10 flex-1   outline-none mx-2" 
                type="text" 
                placeholder="Search Google or Type URL">
            <button v-show="showCancleBtn" class="mx-4" @click="emptySearchQuery">X</button>
            <button>
              <img class="h-4" src="../assets/microphone-solid.svg" alt="">
            </button>
        </div>
        </div>
       
      </div>
</template>


 