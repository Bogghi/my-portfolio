import React from 'react';
import DropdownList from './dropdown-list';

class HomeDropdown extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home-dropdown">
                <i class="fas fa-bars"></i>
            </div>
        )
    }
}

export default HomeDropdown;