import { Link } from 'react-router-dom';

const Home=()=>{
return(
    <div className='text-center text-warning'>
        <h1>
          YOU ARE WELCOME 
        </h1>
        <h4> You will have to sign up first and then login to see post. If you have sign up 
             before then login  with your name and passsword
        </h4>
        <div className='mt-5'>
           <Link  to="/login">LOGIN</Link>&nbsp;
            <Link to="/sign-up">SIGN-UP</Link>  
         </div>  
    </div>

)
}
export default Home
