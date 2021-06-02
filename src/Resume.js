import React from 'react';
import Heading from './components/heading.js';
import TimeSpan from './components/time-span';
import './article.css';

class Resume extends React.Component{
    constructor(props){
        super(props);
        this.title = 'Resume';
        this.experience = {
            0: {
                company: 'Auto1 Group', 
                role: 'IT Junior Web Developer',
                duty: 'Development of new in house tool and mantainance of existing one',
                tools: ['php', 'JQuery', 'Bootstrap 3', 'SQL'],
                start: 'JAN 2021',
                end: 'PRESENT'
            },
            1: {
                company: 'Boolean',
                role: 'Jr. Full Stack Web Developer Trainee',
                duty: 'Developed various replica with the objective of learning the industry-leading technology',
                tools: ['Laravel 7', 'JQuery', 'Bootstrap 4', 'CSS', 'JS', 'SQl'],
                start: 'JUN 2020',
                end: 'DEC 2020'
            },
            2: {
                company: 'Quantyca',
                role: 'Infrastructure & Operations Specialist',
                duty: 'Monitoring and maintenance of theinfrastructure post go live',
                tools: ['Linux', 'SQL', 'Talend', 'MicroStrategy', 'Spotfire', 'Salt Stack', 'Nagios'],
                start: 'JUN 2019',
                end: 'JUN 2020'
            },
            3: {
                company: 'Quantyca',
                role: 'Data Integration Specialist',
                duty: 'ETL Flow for DWH supply using Talend DataIntegration ( 6.2.1 ) and Talend ESB route tomake different system communicate',
                tools: ['Vertica', 'Talend DataIntegration 6.2.1', 'Talend ESB', 'Linux'],
                start: 'SET 2017',
                end: 'JUN 2019'
            }
        }
    }

    render(){
        return (
            <div className="text-padding">
                <Heading value={this.title}/>
                <div className="experiences">
                    {/*  circle throw the experience and print the conten */}
                </div>
            </div>
        )
    }
}

export default Resume;