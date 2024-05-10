<script setup>

</script>

<template>
    <div class="ml-8 mr-16 mt-4">
        <div class="Actor-profile ">
       <div class="flex items-center ">
           <div>
              <div class="name text-lg font-bold">Ursula Corbero</div>
              <div class="crarer text-xs mt-1 ml-1">Spanish actress ⋮</div>
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
                    <img class="photo rounded-tl-2xl  rounded-bl-2xl" src="./ursula.png" alt="" srcset="">
                </div>
                <div class=" h-inherit grid grid-rows-2 gap-1">
                        <div>    
                            <img class="photo  rounded-tr-2xl"  src="./ursula1.png" alt="" srcset="">
                        </div>
                        <div>         
                            <img class="photo rounded-br-2xl"  src="./ursula1.png" alt="" srcset=""> 
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
                    <div class="social-media-name">  YouTube.Vogue </div>
                </div>
                <div class="post-desc ml-2 ">
                 consectetur adipisicing elit. Dicta  
                    justify-between   
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta  
                    justify-between   
                </div>
                <div class="date mt-4 ml-2">July 12 2004</div> 
           </div>

         </div>
         <div class="grid grid-rows-2 gap-2">
          <div class="Age-and-show  grid grid-cols-2 gap-2">
            <div class="age  bg-bisque rounded-2xl ">Age</div>
            <div class="show rounded-2xl  bg-bisque">Show ></div>
          </div>
          <div class="social-media-account grid grid-cols-2  rounded-2xl  bg-bisque   ">
            <div class="social-media"> 
               <div class="flex items-center">
                    <img class= "w-10"src="./youtube-logo-youtube-icon-transparent-free-png.webp" alt="">
                    <div class="media-name">Instagram</div>
               </div>
               <div>
                lorem episum some gibrish i type here
               </div>

            </div>
            <div class="profile">
                <img class="photo "  src="./ursulaPic.png" alt="" srcset=""> 

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