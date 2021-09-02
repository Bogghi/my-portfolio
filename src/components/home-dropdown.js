import React from 'react';
import Article from '../Article';
import Work from '../Work';

class HomeDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ddStatus: false
        }
        this.changeColor = this.changeColor.bind(this);
    }

    render(){
        const isOpen = this.state.ddStatus;
        console.log(this.state);

        return(
            <div className="dd-container">
                <div className="home-dropdown"
                     id='d-down'
                     onTouchStart={this.changeColor}
                     onTouchEnd={this.resetColor}>
                    <i className="fas fa-bars"/>
                </div>
                {isOpen ?
                    <div className="dd-body">
                        <Article/>
                        <Work
                            dataLink={this.props.dataLink}
                            workHandleClick={this.props.workHandleClick}/>
                    </div>:
                    ''
                }
            </div>
        )
    }

    changeColor(){
        //questo this funziona perche' nel costruttore abbiamo fatto il binding di this al metodo
        const dd = this.state.ddStatus;
        this.setState({ddStatus: !dd});

        document.querySelector('#d-down i').classList.add('home-dropdown-active');
    }

    resetColor(){
        document.querySelector('#d-down i').classList.remove('home-dropdown-active');
    }
}

export default HomeDropdown;