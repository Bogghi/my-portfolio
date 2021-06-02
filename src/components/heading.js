import React from 'react';

function Heading (props) {
    return (
        <div className="title">
            <h1>{props.value}</h1>
        </div>
    )
}

export default Heading;