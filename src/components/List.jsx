import React from 'react'
import Item from './Item.jsx'
import { v4 as uuidv4 } from 'uuid';//Genera identificador unico basandose en RFC4122
export default class List extends React.Component{
    render(){
        
        return(
            
            <ul>
                {this.props.items.map((item)=>
                {
                    const id = uuidv4()
                    return <Item key = {id}  name={item.name } stock={item.stock}/>
                    }
                )}
            </ul>
                
           
        )
    }
    
}
