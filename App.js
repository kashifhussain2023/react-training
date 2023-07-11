import React from 'react';
import ReactDom from 'react-dom/client';

const intro = (string1) => {
    return (
            <>
                <p>Hi,{string1} <br /> Please solve this query ?</p>
                {sum(25,25)}
            </>
    )
}

const sum = (param1,param2) => {
        return(
                <p>{param1} + {param2} = {param1+param2}</p>
        )
}

const init=()=>{
    return( intro("Testing User") )
}

const root = ReactDom.createRoot( document.getElementById('root') )
root.render( init() );