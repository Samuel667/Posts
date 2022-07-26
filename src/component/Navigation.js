import { NavLink } from "react-router-dom";

const Nav=()=>{
  return(
    <nav className="navbar navbar-expand bg-warning fixed-top lead"  > 
        <div className="container nav justify-content-center">
            <div>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link">LOGIN</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/sign-up" className="nav-link">SIGN UP</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/postlink" className="nav-link">POST</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about-us" className="nav-link">ABOUT US</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
        )
}
export default Nav  