// import { useFragment } from "@apollo/client";
import { useRoute,useRouter} from "vue-router";
 

export const getParameter=()=>{
    const route=useRoute()
    console.log(route.params.id)
    return route.params.id
}

 
const router = useRouter();
export const useRouting = (path) => {
  router.push(path);
};


 