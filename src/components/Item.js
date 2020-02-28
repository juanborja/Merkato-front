import React from 'react';
export default class Item extends React.Component{
    render(){
        return(
            <button className="Item" onClick={function() { alert('Hola!'); }}>
                {this.props.name}
            </button>
        )
    }
}