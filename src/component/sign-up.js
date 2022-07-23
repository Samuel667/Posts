import { useState,Fragment } from "react";
import { Link } from "react-router-dom";

const Signup=()=>{
    const[Register,setRegister] = useState({firstName:"",lastName:"",Email:"",password:""});
 
   const saveUsers=()=>{
        localStorage.setItem("username",JSON.stringify(Register));
    }
return(
<Fragment>
     <div className='mt-5 text-center'>
         <center>
             <form>
                 <div className=' col-4 form-group'>
                     <label htmlFor='firstname' className='text-warning'> First Name:</label>
                     <input id="one" type="text" className='form-control' name="firstname" placeholder=" Enter your first name" value={Register.firstName} onChange={(e)=>setRegister({...Register,firstName:e.target.value})} /><br></br>
                 </div>
                 <div className=' col-4 form-group'>
                     <label htmlFor='lastname' className='text-warning'>Last Name:</label>
                     <input id="two" type="text" className='form-control' name="lastname" placeholder=" Enter your last name" value={Register.lastName} onChange={(e)=>setRegister({...Register,lastName:e.target.value})} /><br></br>
                 </div>
                 <div className=' col-4 form-group'>
                     <label htmlFor='email' className='text-warning'>Email:</label>
                     <input id="three" type="Email" className='form-control' name="email" placeholder=" Enter your Email" value={Register.Email} onChange={(e)=>setRegister({...Register,Email:e.target.value})} /><br></br>
                 </div>
                     <div className=' col-4 form-group mb-2'>
                         <label htmlFor='password' className='text-warning'>Password:</label>
                         <input id="four" type="password" className='form-control' name="password" placeholder="Enter your password" value={Register.password} onChange={(e)=>setRegister({...Register,password:e.target.value})} /><br></br>
                         <button type="submit" className='px-5 mb-5 btn btn-outline-primary' onClick={()=>saveUsers()}>sign-up</button>
                     </div>
                     </form>
                     <br/>
               <h2 className="text-danger">
                {/* {SetLocal == true ? "click the link below to login":"sign-up to login"}<br></br> */}
                 <Link to="/login">Do you want to Login? click here</Link>&nbsp;
                 <Link to="/">Do you want to go Home? click here</Link>
                </h2>
    </center>
    </div>
</Fragment>
)}
export default Signup