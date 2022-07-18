import { NavLink } from "react-router-dom";

const Nav=()=>{
  return(
          <div>
            <nav >
              <NavLink to="/login">LOGIN</NavLink>&nbsp;
              <NavLink to="/sign-up">SIGN UP</NavLink>
            </nav>
          </div>
        )
}
export default Nav  