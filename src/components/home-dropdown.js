import React from 'react';

class HomeDropdown extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home-dropdown" 
                id='d-down'
                onTouchStart={this.changeColor}
                onTouchEnd={this.resetColor}>
                <i className="fas fa-bars"></i>
            </div>
        )
    }

    changeColor(){
        document.querySelector('#d-down i').classList.add('home-dropdown-active');
    }

    resetColor(){
        document.querySelector('#d-down i').classList.remove('home-dropdown-active');
    }
}

export default HomeDropdown;