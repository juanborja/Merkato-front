import React from 'react';

const Item = (props) =>{
    return (<li className="Item" onClick={function() { alert('Hola! '); }}> 
    {props.name} - {props.stock}
</li>)
}

export default Item;