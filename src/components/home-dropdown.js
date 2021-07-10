import React from 'react';
import DropdownList from './dropdown-list';

class HomeDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'none'
        }
    }

    render(){
        return(
            <div className="home-dropdown">
                <i class="fas fa-bars" onTouchStart={this.changeColor}></i>
            </div>
        )
    }

    changeColor(){
        
    }
}

export default HomeDropdown;