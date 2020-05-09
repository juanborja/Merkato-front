import React from 'react';
import Hijo from './Hijo'
const Padre = (props) => {
   const [estado, setEstado] = React.useState(0);
    return(
        <>
        <h2>{estado}</h2>
    <Hijo estado={estado} otro={setEstado}/></>)
}
export default Padre;

