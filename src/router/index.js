import {createRouter, createWebHistory} from 'vue-router'
import LandingPage from "../view/LandingPage.vue"
import AllResultPage from '../view/AllResultPage.vue'
const router= createRouter(
    { history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
           {
                path:"/",
                name:"Home",
                component: LandingPage,
           },
           {
               path:"/All/:query",
               name:"ALl",
               component: AllResultPage
           }
    ]
   }
)


export default router