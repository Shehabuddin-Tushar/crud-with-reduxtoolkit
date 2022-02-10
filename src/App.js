import './App.css';
import Dataview from './Pages/Dataview';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Singledata from './Pages/Singledata';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
             <Dataview />
          </Route>

          <Route path="/product/:id">
            <Singledata/>
          </Route>

          
        </Switch>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
