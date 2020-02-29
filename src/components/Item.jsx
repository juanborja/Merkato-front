import React from 'react';
export default class Item extends React.Component{
    render(){
        return(
            <li> <button className="Item" onClick={function() { alert('Hola! '); }}>
            {this.props.name} - {this.props.stock}
        </button></li>
           
        )
    }
}