import React from 'react';

class Social extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
}

class HomeDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ddStatus: false
        }
    }

    render(){
        const isOpen = this.state.ddStatus;

        return(
            <div>
                <div className="home-dropdown"
                     id='d-down'
                     onTouchStart={this.changeColor}
                     onTouchEnd={this.resetColor}>
                    <i className="fas fa-bars"/>
                </div>
                <div className="dd-body">
                    {isOpen ?
                        <div>hello</div>:
                        <div>nope</div>
                    }
                </div>
            </div>
        )
    }

    changeColor(){
        document.querySelector('#d-down i').classList.add('home-dropdown-active');
        let curDDStatus = this.state;
        // this.setState({ddStatus: curDDStatus});
    }

    resetColor(){
        document.querySelector('#d-down i').classList.remove('home-dropdown-active');
    }
}

export default HomeDropdown;