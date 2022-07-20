import './App.css';
import {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './Components/Pages/Landing';
import Contacts from './Components/Pages/Contacts';
import Portfolio from './Components/Pages/Portfolio';

const App = () => {

    const [user, setUser] = useState(null)

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} setUser={setUser}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>      
        
         
      </div>
    );
}

export default App;
