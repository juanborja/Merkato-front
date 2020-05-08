import React from 'react'
import {Table, TableContainer, TableHead, TableCell, TableBody, Paper, TableRow, } from  '@material-ui/core'
import Actions from './Actions';
import axios from 'axios';


const List = (props)=>{
  const [items, setItems] = React.useState([]);
React.useEffect(()=>{
  axios.get('http://127.0.0.1:5000/product').then(res=>{
    const data = res.data;
    setItems(data.data)
  });
},[]);
    const [isOpen, setOpen] = React.useState(false);
    const handleVer = (name) => {
        alert('Elegiste: '+name)
    }
    return(
        <div>
        <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell >Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key=''>
               
                <TableCell >{item.name }</TableCell>
                <TableCell >{item.description}</TableCell>
                <TableCell ><Actions onClick= {handleVer} name={item.name} hook= {setOpen}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isOpen && <div>Hola</div>}  
       </div>
         
       
    )
}

export default List;
