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

class Resume extends React.Component{
    constructor(props){
        super(props);
        this.title = 'Resume';
        this.subHeading = {
            0: 'Experiences',
            1: 'Education'
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
        this.education = {
            0: {
                school: 'Boolean Careers Master',
                title: 'Certificate in Web Development',
                start: 'JUN 2020',
                end: 'DEC 2020'
            },
            1: {
                school: 'Unicomunicazione/NLP ITALY Coaching School',
                title: `1st Level Master's degree`,
                start: 'JAN 2020',
                end: 'MAR 2020'
            },
            2: {
                school: 'Unimi',
                title: `Short degreein in computer science - Not Completed`,
                start: 'SET 2017',
                end: 'JUN 2019'
            },
            3: {
                school: 'ITI - Pino Hensemberger',
                title: `Computer expert`,
                start: 'SET 2012',
                end: 'SET 2017'
            }
        }
    }

    render(){
        const exp = this.experience;
        const edu = this.education;
        let r = [],
            e = [];

        for (const key in exp) {
            if (Object.hasOwnProperty.call(exp, key)) {
                const e = exp[key];
                r.push(
                    <SubTitle 
                        company={e.company}
                        role={e.role}/>
                );
                r.push(
                    <TimeSpan 
                        start={e.start}
                        end={e.end}/>)
                r.push(
                    <Paragraph 
                        value={e.duty}
                        int={true}
                        pre='Duty: '/>);
                r.push(
                    <DropdownList 
                        title='Tools'
                        list={e.tools}/>
                );
            }
        }

        for (const key in edu) {
            if(Object.hasOwnProperty.call(edu, key)){
                const v = edu[key];
                e.push(
                    <SubTitle
                        company={v.school}
                        role={v.title}/>
                );
                e.push(
                    <TimeSpan 
                        start={v.start}
                        end={v.end}/>
                );
            }
        }

        return (
            <div className="text-padding">
                <Heading value={this.title}/>
                <div className="experiences">
                    <SubHeading value={this.subHeading[0]}/>
                    {r}
                </div>
                <Separator/>
                <div className='education'>
                    <SubHeading value={this.subHeading[1]}/>
                    {e}
                </div> 
            </div>
        )
    }
}

export default Resume;