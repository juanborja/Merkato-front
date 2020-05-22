import React from 'react';
import {Table, TableContainer, TableHead, TableCell, TableBody, Paper, TableRow, } from  '@material-ui/core'
import Actions from './Actions';
import axios from 'axios';
import { Text, Linking } from 'react';

const List = (props)=>{
  const [items, setItems] = React.useState([]);
  React.useEffect(()=>{
  axios.get('https://api.stackexchange.com/2.2/answers?page=1&pagesize=10&order=desc&sort=activity&site=stackoverflow').then(res=>{
    console.log(res.data.items);
    setItems(res.data.items)
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
              <TableCell>QDisplayCode</TableCell>
              <TableCell>ADisplayCode</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Link</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
               
                <TableCell>{item.question_id }</TableCell>
                <TableCell>{item.answer_id}</TableCell>
                <TableCell><Actions onClick= {handleVer} name={item.owner.display_name} hook= {setOpen}/></TableCell>
                <TableCell><Text onPress={()=>Linking.openURL(item.owner.link)}>{item.owner.link}</Text></TableCell>
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
