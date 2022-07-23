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
         <div id="postsId" style={{color:'red', fontFamily:'cursive'}}><big>ID - {setPostList[i].id}</big></div>
         <div style={{color:'royalblue', fontFamily:' Georgia, Times New Roman, Times, serif'}}>TITLE -{setPostList[i].title}</div> 
         <div style={{color:'purple'}}> <small>ALBUMID - {setPostList[i].albumId}</small></div>
        </div>
        </h5> 
       setSearch(receiverPost)   
      } else if (setPostList[i].title == event){
        let receiverPost = <h5>
        <div >
         <div id="postsId" style={{color:'red', fontFamily:'cursive'}}><big>ID - {setPostList[i].id}</big></div>
         <div style={{color:'royalblue', fontFamily:' Georgia, Times New Roman, Times, serif'}}>TITLE -{setPostList[i].title}</div> 
         <div style={{color:'purple'}}> <small>ALBUMID - {setPostList[i].albumId}</small></div>
        </div>
        </h5> 
        setSearch(receiverPost)
      }else if(!event === setPostList[i].title){
        setSearch(<h4> Incorrect! enter coorect TITLE</h4>)
      }else if (event === ""){
        setSearch(<h4> Searched detail here</h4>)
      }else if (Number(event)>50 ){
         setSearch(<h4> Incorrect! enter correct ID or TITLE</h4>)
   }
  }
}

return(
 <Fragment >  
 <div className="container m-5">
  <Nav/>              
 <div className='mt-2 text-center'>
 <div className='lead text-light pt-3'> You can search post by ID or by TITLE </div>
 <input className='form-control mx-4'  placeholder="SEARCH BY ID OR TITLE"  onKeyUp={(event)=>Looping(event.target.value)}/>
 <div className='mb-4'>{Search}</div> 
 <hr/><br></br>
 <h1 className='text-success text-center'>POSTS</h1> 
 {setPostList!==[] ? setPostList.map((pas=>{
  
    for (let i = 50; i>=pas.id; i--) { 
      return(
        <section key={pas.id}> 
          <h5 >
         <div style={{color:'red', fontFamily:'cursive'}}><big>ID - {pas.id}</big> </div><br/>
         <div style={{color:'royalblue',fontFamily:'Georgia, Times New Roman, Times, serif'}} > TITLE - {pas.title}</div> <br/>
         <div style={{color:'purple'}}> <small>ALBUMID - {pas.albumId} </small></div>   
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