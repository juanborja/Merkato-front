import React from 'react';
import List from './components/List.jsx'
import './App.css';
import data from "./data/demo";



 const App = ()=> {
  

    return (
      
      <List items={data}/>
       
    );
  
  
}

export default App;
