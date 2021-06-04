import React from 'react';

function SubTitle(props){
    return (
        <div className='sub-title'>
            <h3>
                {props.role}
            </h3>
            <h6>
                At <i>{props.company}</i>
            </h6>
        </div>
    )
}

export default SubTitle;