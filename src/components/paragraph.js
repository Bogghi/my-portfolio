import React from 'react';

function Paragraph(props){
    return(
        <p className='paragraph'>
            <b>{props.pre}</b>{props.value}
        </p>
    )
}

export default Paragraph;