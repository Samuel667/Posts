import { Link } from 'react-router-dom';

const Home=()=>{
return(
    <div className='text-center text-light'>
        <h1 className='text-warning'>
          YOU ARE WELCOME 
        </h1>
        <b><i className='text-warning'>Information is power. Therefore get inform and that is why we are here for you</i></b>
        <h4 className='m-4'> You will have to sign up first and then login to see post. If you have sign up 
             before then login  with your name and passsword. Click on the link below to sign-up or login respectively.
        </h4>
        <div className='mt-5 text-success '>
          <Link className='p-3' to="/sign-up">SIGN-UP</Link>&nbsp;
          <Link  to="/login">LOGIN</Link>
        </div>  
    </div>
)
}
export default Home
