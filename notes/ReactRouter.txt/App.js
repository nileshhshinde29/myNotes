import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Cart from './Cart';
import { BrowserRouter, Route, Router, Link,Switch ,Redirect } from "react-router-dom";
import PlaceOrder from './PlaceOrder';
// npm i react-router-dom@5.3.0
//import { Redirect,useHistory } from 'react-router-dom';
// const history = useHistory()
// return (history.push('/'))


function App() {
  return ( 
   
    <BrowserRouter >
       <Switch>
         <Route exact path='/'><Redirect to="/home"/></Route>
         <Route path="/home" ><Home /></Route>
         <Route path="/Cart" ><Cart /></Route>
         <Route path="/placeorder" ><PlaceOrder /></Route>
       </Switch>
    </BrowserRouter>

  );
}



export default App;
