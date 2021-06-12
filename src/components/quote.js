import React from 'react';

function Quote ( props ){
    return (
        <div className='quote'>
            {props.value}
        </div>
    )
}

export default Quote;