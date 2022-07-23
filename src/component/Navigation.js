import { NavLink } from "react-router-dom";

const Nav=()=>{
  return(
    <nav className="navbar navbar-expand bg-primary navbar-light fixed-top"> 
        <div className="container">
            <button className="navbar-toggler" type="button"
             data-bs-toggle="collapse" data-bs-target="#navmenu">
             <span className="navbar-toggler-icon"></span>
            </button>
                     {/* <!-- collapse --> */}
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto ml-5">
                <li className="nav-item">
                        <NavLink to="/" class="nav-link">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" class="nav-link">LOGIN</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/sign-up" class="nav-link">SIGN UP</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/postlink" class="nav-link">POST</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about-us" class="nav-link">ABOUT US</NavLink>
                    </li>
                    </ul>
                </div>
             </div>
            </nav> 
        )
}
export default Nav  