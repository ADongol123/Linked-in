import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login"
import Home from "./Components/Home"
import Header from "./Components/Header"
function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/">
              <Login/>   
          </Route> 
          <Route exact path="/home">
              <Header/>
              <Home/>
          </Route>
        </Switch>   
    </Router>  

    </div>
  );
}

export default App;
