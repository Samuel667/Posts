// import React from 'react';
// import { useState, Fragment } from 'react';




// const PostView = ({color} ) =>{
//     let[Num,setNum] = useState({digit:0})
//     let[write,setWrite] =useState({comment:''})

//     const like=()=>{
// if(Num.digit == 0){
//        setNum({digit:Num.digit+1 })
       
//     } else if( Num.digit>0){
//         setNum({digit:Num.digit-1})
//     }
// }
// const writing=()=>{
//     let saveComment = localStorage.setItem('savecomments',JSON.stringify(write.comment))
//    let rescomment = JSON.parse(localStorage.getItem('savecomments'))
//    let i = document.getElementsByTagName('div').first;
//         }
    
// let talk='save'    
//     return(
//         <Fragment>
//             <div>
//              <button style={{backgroundColor:color}}  onClick={()=>like()}>{Num.digit}</button>&nbsp;
//                {  talk ? <input id="Idcomment"
//                    placeholder="write comment"
//                   name={write.comment}
//                   onChange={(e)=>setWrite({...write,comment:e.target.value})}/>:<div id="first"></div> }&nbsp;


//      <button onClick={()=>writing()}  style={{ backgroundColor:'honeydew'}}> {talk} </button> 
//      {write.comment}
    

//              </div>
//             </Fragment>
//     )

// }
// export default PostView;