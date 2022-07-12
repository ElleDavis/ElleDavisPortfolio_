import Welcome from './Components/Welcome';
import Contacts from './Components/Contacts';
import { Component } from 'react';
import './App.css';

//function App() {
  class App extends Component{

    state={

    }

    render(){
    return (
      <div className="App">
        <Welcome/>
        <Contacts/>
        
      </div>
    );
  }
}

export default App;
