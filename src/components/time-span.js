import React from 'react';

function TimeSpan(props){
    return(
        <div className="time-span">
            <p>{props.start} - {props.end}</p>
        </div>
    )
}

export default TimeSpan;