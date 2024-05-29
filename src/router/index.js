import {createRouter, createWebHistory} from 'vue-router'
import LandingPage from "../view/LandingPage.vue"
import CharacterPage from "../view/CharacterPage.vue"
import EpisodesPage from '../view/EpisodesPage.vue'
import LocationPage from '../view/LocationPage.vue'
  const router= createRouter(
    { history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
           {
                path:"/",
                name:"Home",
                component: LandingPage,
           },
           {
            path:"/characters/:id",
            name:"character",
            component: CharacterPage,
          },
          {
               path:"/Episodes/:id",
               name:"episode",
               component: EpisodesPage,
          },
          {
               path:"/Locations/:id",
               name:"locations",
               component: LocationPage,
          }
     
       
    ]
   }
)


export default router