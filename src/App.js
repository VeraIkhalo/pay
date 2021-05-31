import Whatyoudo from './pages/Whatyoudo/Whatyoudo';
import Chooseyourplan from './pages/Chooseyourplan/Chooseyourplan';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route exact path="/">
                <Whatyoudo />
              </Route> 
              <Route exact path="/Chooseyourplan">
                <Chooseyourplan />
              </Route>   
            </Switch>
        </ Router>
    </div>
  );
}

export default App;

