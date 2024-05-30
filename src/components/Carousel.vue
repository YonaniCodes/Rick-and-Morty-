  <template>
    <div>
      <Swiper
        :modules="[Pagination]"
        :slides-per-view="3"
        :space-between="2"
        :loop="true"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="relative"
      >
      
        <SwiperSlide v-for="(photo, index) in photos" :key="index">
          <img class="img mt-32 " :src="photo" :alt="'Image ' + (index + 1)">
        </SwiperSlide>
      </Swiper>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  
  const onSwiper = (swiper) => {
    console.log(swiper);
  };
  const onSlideChange = () => {
    console.log('slide change');
  };
  

  const photos = [
  "https://wallpapercave.com/wp/wp3277661.jpg",
   "https://images.hdqwalls.com/wallpapers/rick-and-morty-orange-space-art-4k-xy.jpg", //
    "https://th.bing.com/th/id/OIP.Za158hLJZSlRcuqq983clgHaEK?w=640&h=360&rs=1&pid=ImgDetMain"   ,
     "https://s1.dmcdn.net/v/BPJ4k1VtMhivv1j0D/x720",
     "https://wallpapercave.com/wp/wp3277661.jpg",
   "https://images.hdqwalls.com/wallpapers/rick-and-morty-orange-space-art-4k-xy.jpg", //
    "https://th.bing.com/th/id/OIP.Za158hLJZSlRcuqq983clgHaEK?w=640&h=360&rs=1&pid=ImgDetMain"   ,
     "https://s1.dmcdn.net/v/BPJ4k1VtMhivv1j0D/x720",
 
   
 ];
 
  
  </script>
  
  <style >
  .swiper-pagination-bullet {
    background-color: white;
    height: 20px;
    width: 20px;
  }
  
 
</style> 