import React from 'react';
import Heading from './components/heading.js';
import './article.css';

class Resume extends React.Component{
    constructor(props){
        super(props);
        this.title = 'Resume';
    }

    render(){
        return (
            <Heading value={this.title}/>
        )
    }
}

export default Resume;