import React from 'react';
import  {Button}  from '@material-ui/core/';

const Actions = (props) => {
    return (<Button onClick={()=> {props.onClick(props.name); props.hook(true)}}>Check</Button>);
}

export default Actions;