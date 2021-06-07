import React from 'react';

//import componentes
import Heading from './components/heading';
import TimeSpan from './components/time-span';
import SubTitle from './components/sub-title';
import Paragraph from './components/paragraph';
import SubHeading from './components/sub-heading';
import DropdownList from './components/dropdown-list';
import Separator from './components/separator';
import './article.css';

class Quantyca extends React.Component{
    constructor(props){
        super(props)
        this.title = 'Quantyca'
    }

    render(){
        return(
            <div className='text-padding'>
                <Heading value={this.title}/>
            </div>
        )
    }
}

export default Quantyca;