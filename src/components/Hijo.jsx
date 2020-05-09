import React from 'react';

const Hijo = (props) => {
    
return(<><h2>Push me --> </h2>
<button onClick={
    () => props.otro(props.estado +1)}>
  Use callback
</button>
</>);
}

export default Hijo;
