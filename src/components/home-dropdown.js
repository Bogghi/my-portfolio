import React from 'react';

class HomeDropdown extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home-dropdown" 
                id='d-down'
                onTouchStart={this.changeColor}>
                <i className="fas fa-bars"></i>
            </div>
        )
    }

    changeColor(){
        document.getElementById('d-down').classList.add('touch');
    }

    resetColor(){
        document.getElementById('d-down').classList.remove('touch');
    }
}

export default HomeDropdown;