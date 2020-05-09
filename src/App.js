import React from 'react';
import List from './components/List.jsx'
import './App.css';
import data from "./data/demo";
import Padre from './components/Padre'


 const App = ()=> {
  

    return (
     // <Padre />
      <List items={data}/>
       
    );
  
  
}

export default App;
