import {useState} from 'react';
import { Link } from "react-router-dom";

const Login = () =>{
let[signIn,setSignIn] = useState({name:"", password:""});
const storeData = JSON.parse(localStorage.getItem("username"));
console.log(storeData)
const answername = storeData.map((val => val.name)) 
const answerpassword = storeData.map((val)=>val.password);
 
const wrong =()=>{
    alert("wrong password or username")
  }
 return( 
    <div className='mt-5 text-center'>
          <center>
              <form>
                  <div className=' col-6 from-group'>
                    <label for='name'className='text-warning'> Name:</label>
                    <input className='form-control'  id="one" type="text" placeholder=" Enter your Name" value={signIn.name} onChange={(e)=>setSignIn({...signIn,name:e.target.value})} />
                  </div>
                  <div className=' col-6 from-group mb-4'>
                    <label for='password'className='text-warning'>Password:</label>
                    <input id="two" className='form-control' type="password" placeholder="Enter your Password" value={signIn.password}  onChange={(e)=>setSignIn({...signIn,password:e.target.value})}/>
                  </div>
              </form>
             { answername == signIn.name && answerpassword == signIn.password ? 
             <Link className='text-success mb-5' to="/postlink">
              <button className=' px-5 mb-5 btn btn-outline-primary' >login</button><br/>
             </Link>: 
                  <button onClick = {()=>wrong()}>login</button> 
             }
             <Link to="/sign-up">Do you want to sign-up.</Link>&nbsp;
             <Link to="/">Do you want to go Home click here</Link>
          </center>
    </div>
  )
    }
export default Login