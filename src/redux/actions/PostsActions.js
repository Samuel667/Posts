
import Axios from "axios"; 
export const setPosts=()=> async(dispatch,getState) =>{
    
   await Axios.get("http://jsonplaceholder.typicode.com/photos").then((feedback)=>{
  const localS=""
        console.log(feedback.data);
        localStorage.setItem("post",JSON.stringify(feedback.data))
        dispatch({
            type: 'ActionTypes.SET_PHOTO',
            payload: feedback.data
        });    
    }).catch(error=>{
       getState(error)})
       

}; 
// export const viewedPosts=()=>{
//     return{
//         type:ActionTypes.VIEWED_PHOTO,
//         payload:photo
//     }
// }

// export const commentedPosts=()=>{
//     return{
//         type:ActionTypes.COMMENTED_PHOTO,
//         payload:photos
//     }
// }

