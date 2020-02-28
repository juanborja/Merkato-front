import React from 'react';
import Item from './Item.js'
export default class List extends React.Component{
    render(){
        return(
            this.renderItem("Pepe")
           
                
           
        )
    }
    renderItem(n){
        return <Item name={n}/>
    }
}