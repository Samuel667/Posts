import React from 'react';  
import { BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './component/Homepage';
import Login from './component/login';
import PostLink from './component/postlink';
import Heres from './component/Error';
import Signup from './component/sign-up';

function App() {
  return (
    <div>
  <BrowserRouter>
   <div>
          <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/postlink" component={PostLink}/>
             <Route path="/login" component={Login} />
             <Route path="/sign-up" component={Signup} />
             <Route component={Heres}/>
          </Switch> 
    </div>
  </BrowserRouter>
  </div>
  )
}
export default App;
