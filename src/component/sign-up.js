import { useState,Fragment } from "react";
import { Link } from "react-router-dom";

const Signup=()=>{
    let[Register,setRegister]= useState({name:"",password:""});
    const[ storeInfos,setInfos]=useState([]);
 
    localStorage.setItem("username",JSON.stringify(storeInfos));
    const saveUsers = () =>{
       setInfos([...storeInfos,Register])
       console.log(Register)
    }

return(
<Fragment>
     <div className='mt-5 text-center'>
         <center>
             <form>
                 <div className=' col-6 form-group'>
                     <label for='name'className='text-warning'>Name:</label>
                     <input id="one" type="text" className='form-control' placeholder="name" value={Register.name} onChange={(e)=>setRegister({...Register,name:e.target.value})} /><br></br>
                 </div>
                     <div className=' col-6 form-group mb-4'>
                         <label for='name'className='text-warning'>Password:</label>
                         <input id="two" type="password" className='form-control' placeholder="password" value={Register.password} onChange={(e)=>setRegister({...Register,password:e.target.value})} /><br></br>
                         <button type="submit" className=' px-5 mb-5 btn btn-outline-primary' onClick = {()=>saveUsers()}>click</button>
                     </div>
                     
               </form><br/>
                <Link to="/login">Do you want to Login? click here</Link>&nbsp;
                 <Link to="/home">Do you want to go Home? click here</Link>
    </center>
    </div>
</Fragment>
)}
export default Signup