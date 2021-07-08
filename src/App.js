import InventoryHome from './components/InventoryHome/InventoryHome.js';
import { Route, Switch } from "react-router-dom";
import NewReport from './components/InventoryHome/NewReport/Index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={() =><InventoryHome/>}/>
        <Route exact path="/NewReport" component={() =><NewReport/>}/>
      </Switch>
    </div>
  );
}

export default App;
