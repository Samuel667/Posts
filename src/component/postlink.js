import React, { Fragment, useEffect,useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { setPosts } from '../redux/actions/PostsActions';
import Nav from './Navigation'

const PostLink =()=>{
  let[Search,setSearch]=useState();
  let[postList,setPostList]=useState();

   // const Fact= useSelector((state) => state.allPosts);
   setPostList = JSON.parse(localStorage.getItem("post"));
  const dispatch=useDispatch()
useEffect(() => {
  if(setPosts()=== false){
    dispatch(setPosts());
  }
},[] );

const Looping= (event)=>{
for (let i = 0; i<= 49; i++) {
      if (setPostList[i].id === Number(event)) {
      let receiverPost =  <h5>
        <div >
         <div id="postsId" style={{color:'lightblue', fontFamily:'cursive'}}><big>ID - {setPostList[i].id}</big></div>
         <div style={{color:'antiquewhite', fontFamily:' Georgia, Times New Roman, Times, serif'}}><big>TITLE</big> -{setPostList[i].title}</div> 
         <div style={{color:'aqua'}}> <small>ALBUMID - {setPostList[i].albumId}</small></div>
        </div>
        </h5> 
       setSearch(receiverPost)   
      } else if (setPostList[i].title == event){
        let receiverPost = <h5>
        <div >
         <div id="postsId" style={{color:'lightblue', fontFamily:'cursive'}}><big>ID - {setPostList[i].id}</big></div>
         <div style={{color:'antiquewhite', fontFamily:' Georgia, Times New Roman, Times, serif'}}><big>TITLE</big> -{setPostList[i].title}</div> 
         <div style={{color:'purple'}}> <small>ALBUMID - {setPostList[i].albumId}</small></div>
        </div>
        </h5> 
        setSearch(receiverPost)
      }else if(!event === setPostList[i].title){
        setSearch(<h4> Incorrect! enter coorect TITLE</h4>)
      }else if (event === ""){
        setSearch(<h4 style={{color:'green'}}> Searched detail here</h4>)
      }else if (Number(event)>50 ){
         setSearch(<h4 style={{color:'red'}}> Incorrect! enter correct ID or TITLE</h4>)
   }
  }
}

return(
 <Fragment >  
 <div className="container text-center m-5 ">
  <Nav/>              
 <div className='mt-2  justify-content-center'>
 <div className=' lead mb-1 pt-3' style={{color:'violet'}}> You can search post by ID or by TITLE </div>
 <input className='form-control mx-4'  placeholder="SEARCH BY ID OR TITLE"  onKeyUp={(event)=>Looping(event.target.value)}/>
 <div className='mb-4'>{Search}</div> 
 <hr/><br></br>
 <h1 className='text-warning text-center'>POSTS</h1> 
 {setPostList!==[] ? setPostList.map((pas=>{
  
    for (let i = 50; i>=pas.id; i--) { 
    return(
        <section key={pas.id}> 
          <h5 className='m-5' >
           <div style={{color:'lightblue', fontFamily:'cursive'}}><big>ID - {pas.id}</big> </div><br/>
           <div style={{color:'antiquewhite',fontFamily:'Georgia, Times New Roman, Times, serif'}} ><big>TITLE</big> - {pas.title}</div> <br/>
           <div style={{color:'aqua'}}> <small>ALBUMID - {pas.albumId} </small></div>   
         </h5>
         <hr/>
      </section>
    )
  }
}
  )):
alert("Get connected to the internet and refresh")
  }
   </div> 
   </div>
 </Fragment>
)    
}
export default PostLink;