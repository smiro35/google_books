import React from 'react';


function BOOK (props){
    
    return(
        <div style={{border: "1px black solid"}} >
            <p>Kind: {props.kind}</p>
            <p>ID: {props.etag} </p>
            <button >Save</button>
        </div>    
    )

}

export default BOOK;