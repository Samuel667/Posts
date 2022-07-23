import {useState} from 'react';
import { Link } from "react-router-dom";

const Login = () =>{
let[signIn,setSignIn] = useState({firstName:"", password:""});
const storeData = JSON.parse(localStorage.getItem("username"));
console.log(storeData.firstName)
const answername = storeData.firstName
const answerpassword = storeData.password;
 
const wrong =()=>{
    alert("wrong password or username")
  }
 return( 
    <div className='mt-5 text-center'>
          <center>
              <form>
                  <div className=' col-6 from-group'>
                    <label htmlFor='firstName'className='text-warning'>First Name:</label>
                    <input className='form-control'  id="one" type="text" placeholder=" Enter your Name" value={signIn.firstName} onChange={(e)=>setSignIn({...signIn,firstName:e.target.value})} />
                  </div>
                  <div className=' col-6 from-group mb-4'>
                    <label htmlFor='password'className='text-warning'>Password:</label>
                    <input id="two" className='form-control' type="password" placeholder="Enter your Password" value={signIn.password}  onChange={(e)=>setSignIn({...signIn,password:e.target.value})}/>
                  </div>
              </form>
              <div className='text-success mb-5'>
             { answername == signIn.firstName && answerpassword == signIn.password ? 
              <Link to="/postlink">
              <button className='px-5 mb-5 btn btn-outline-primary' >login</button><br/>
             </Link>: 
                  <button className='px-5 mb-5 btn btn-outline-primary' onClick = {()=>wrong()}>login</button>
                   }
                   </div>
                   <h2>
             <Link className='text-outline-primary' to="/sign-up">Do you want to sign-up click here?</Link>&nbsp;
             <Link to="/">Do you want to go Home click here?</Link>
             </h2>
          </center>
    </div>
  )
    }
export default Login