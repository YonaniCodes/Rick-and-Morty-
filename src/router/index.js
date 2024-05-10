import {createRouter, createWebHistory} from 'vue-router'
import LandingPage from "../view/LandingPage.vue"
import AllResultPage from '../view/AllResultPage.vue'
import Images from '../view/ImagesPage.vue'
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
           },
           {
            path:"/Images/:query",
            name:"Images",
            component: Images
        }
    ]
   }
)


export default router