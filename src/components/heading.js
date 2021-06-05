import React from 'react';

function Heading (props) {
    return (
        <div className="title" onClick={() => window.location.reload()}>
            <h1>{props.value}</h1>
        </div>
    )
}

export default Heading;