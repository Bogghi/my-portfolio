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

class Auto1 extends React.Component{
    constructor(props){
        super(props)
        this.title = 'Auto1';
        this.start = 'SET 2017';
        this.end = 'JUN 2019';
    }

    render(){
        return(
            <div className='text-padding'>
                <Heading value={this.title}/>
            </div>
        )
    }
}

export default Auto1;