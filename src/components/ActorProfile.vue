<script setup>
import { defineProps } from 'vue';
const {filteredData }= defineProps(['filteredData'])
const {overview}=filteredData
console.log(filteredData)

console.log("hello")
</script>

<template>
       <div class="ml-8 mr-16 mt-4">
        <div class="Actor-profile ">
       <div class="flex items-center ">
           <div>
              <div class="name text-lg font-bold">{{filteredData.name}} </div>
              <div class="crarer text-xs mt-1 ml-1"> {{filteredData.carer}} ⋮</div>
           </div>
           <div class="">
              <button class="ml-8 bg-bisque px-4 py-1 rounded-2xl"> Overview</button>
              <button class="ml-8 bg-bisque px-4 py-1 rounded-2xl ">Movies and shows</button>
              <button class="ml-8 bg-bisque px-4 py-1 rounded-2xl">Trailers & clips</button>
              <button class="ml-8 bg-bisque px-4 py-1 rounded-2xl">Relationships</button>
           </div>
         </div>
    </div>
    <div class="profile-pics   mt-4 h-340 ">
         <div class="gallery h-inherit  ">
                <div class="h-inherit">
                    <img class="photo rounded-tl-2xl  rounded-bl-2xl" :src="overview.gallery[0]" alt="" srcset="">
                </div>
                <div class=" h-inherit grid grid-rows-2 gap-1">
                        <div>    
                            <img class="photo  rounded-tr-2xl"  :src="overview.gallery[1]" alt="" srcset="">
                        </div>
                        <div>         
                            <img class="photo rounded-br-2xl"  :src="overview.gallery[2]" alt="" srcset=""> 
                        </div>
                </div>
         </div>
         <div class="youtube-channel grid grid-rows-2 ">
           <div>
            <img class="photo rounded-tr-2xl rounded-tl-2xl "  src="./video1.png" alt="" srcset=""> 
           </div>

           <div class="actor-post bg-bisque rounded-bl-2xl  rounded-br-2xl  ">    
                <div class= "flex items-center">
                    <img class= "w-10"src="./youtube-logo-youtube-icon-transparent-free-png.webp" alt="">
                    <div class="social-media-name">{{overview.post.mediaName}}.{{overview.post.channelName}} </div>
                </div>
                <div class="post-desc ml-2 ">
                 {{overview.post.text}}
                </div>
                <div class="date mt-4 ml-2">{{overview.post.date}}</div> 
           </div>

         </div>
         <div class="grid grid-rows-2 gap-2">
          <div class="Age-and-show  grid grid-cols-2 gap-2">
            <div class="age  bg-bisque rounded-2xl ">{{overview.age}}</div>
            <div class="show rounded-2xl  bg-bisque">Show ></div>
          </div>
          <div class="social-media-account grid grid-cols-2  rounded-2xl  bg-bisque   ">
            <div class="social-media ml-2 mt-2"> 
               <div class="flex items-center">
                    <img class= "w-4 mr-2" :src="overview.socialMedia.favicon" alt="">
                    <div class="media-name">{{overview.socialMedia.name}}</div>
               </div>
               <div>
                <div>{{overview.socialMedia.userName}} </ div>
                    <div>{{overview.socialMedia.text}}</div>
                </div>

            </div>
            <div class="profile">
                <img class="photo  rounded-br-2xl  rounded-tr-2xl  "  :src="overview.socialMedia.profilePicture" alt="" srcset=""> 

            </div>
          </div>

         </div>
       </div>
    </div>
   
</template>

<style  scoped>
.profile-pics{
    display: grid;
	grid-template-columns: 50% 25% 25%;
    gap: 16px


}
.gallery{
    display: grid;
	grid-template-columns: 60% 40%;
    gap: 4px;

} 
</style>