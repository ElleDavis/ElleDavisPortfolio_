import Landing from './Components/Pages/Landing';
import Contacts from './Components/Pages/Contacts';
import { Component } from 'react';
import './App.css';

//function App() {
  class App extends Component{

    state={

    }

    render(){
    return (
      <div className="App">
      
        <Landing/>
        <Contacts/>
        
      </div>
    );
  }
}

export default App;
