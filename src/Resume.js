import React from 'react';

//import componentes
import Heading from './components/heading';
import TimeSpan from './components/time-span';
import SubTitle from './components/sub-title';
import Paragraph from './components/paragraph';
import SubHeading from './components/sub-heading';
import DropdownList from './components/dropdown-list';
import './article.css';

class Resume extends React.Component{
    constructor(props){
        super(props);
        this.title = 'Resume';
        this.subHeading = {
            0: 'Experiences'
        }
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
        const exp = this.experience;
        let r = [];

        for (const key in exp) {
            if (Object.hasOwnProperty.call(exp, key)) {
                const e = exp[key];
                r.push(
                    <SubTitle 
                        company={e.company}
                        role={e.role}/>
                );
                r.push(
                    <Paragraph 
                        value={e.duty}
                        int={true}
                        pre='Duty: '/>);
                r.push(
                    <DropdownList 
                        title='Tools'
                        list={e.tools}/>
                )
            }
        }

        return (
            <div className="text-padding">
                <Heading value={this.title}/>
                <SubHeading value={this.subHeading[0]}/>
                <div className="experiences">
                    {r}
                </div>
            </div>
        )
    }
}

export default Resume;