import React from 'react';

//import componentes
import Heading from './components/heading';
import TimeSpan from './components/time-span';
import SubTitle from './components/sub-title';
import Paragraph from './components/paragraph';
import SubHeading from './components/sub-heading';
import DropdownList from './components/dropdown-list';
import Separator from './components/separator';
import './css/article.css';

class Resume extends React.Component{
    constructor(props){
        super(props);
        this.title = 'Resume';
        this.subHeading = {
            0: 'Skills',
            1: 'Experiences',
            2: 'Education'
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
        this.skill = {
            0: 'PHP - Laravel',
            1: 'HTML CSS',
            2: 'JavaScript - ( JQuery, React )',
            3: 'SQL - (DBMS: MySql, Vertica, Oracle)',
            4: 'Bootstrap',
            5: 'Linux',
            6: 'Java'
        }
    }

    render(){
        const exp = this.experience;
        const edu = this.education;
        const skl = this.skill;
        let r = [],
            e = [],
            s = [];

        for (const key in exp) {
            if (Object.hasOwnProperty.call(exp, key)) {
                const e = exp[key];
                r.push(
                    <SubTitle
                        key = {key+'-sub-t'}
                        company={e.company}
                        role={e.role}/>
                );
                r.push(
                    <TimeSpan
                        key = {key+'-tspan'}
                        start={e.start}
                        end={e.end}/>)
                r.push(
                    <Paragraph
                        key = {key-'par'}
                        value={e.duty}
                        int={true}
                        pre='Duty: '/>);
                r.push(
                    <DropdownList
                        key = {key+'-dd'}
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
                        key = {key+'-sub-t'}
                        company={v.school}
                        role={v.title}/>
                );
                e.push(
                    <TimeSpan
                        key = {key+'-tspan'}
                        start={v.start}
                        end={v.end}/>
                );
            }
        }

        for(const key in skl){
            if(Object.hasOwnProperty.call(skl, key)){
                const sv = skl[key];
                s.push(
                    <li
                        key={key+'-li'}>
                        <h4>{sv}</h4>
                    </li>
                )
            }
        }

        return (
            <div className="text-padding">
                <Heading value={this.title}/>
                <div className="skils">
                    <SubHeading value={this.subHeading[0]}/>
                    <ul className="s-list">
                        {s}
                    </ul>
                </div>
                <Separator/>
                <div className="experiences">
                    <SubHeading value={this.subHeading[1]}/>
                    {r}
                </div>
                <Separator/>
                <div className='education'>
                    <SubHeading value={this.subHeading[2]}/>
                    {e}
                </div> 
            </div>
        )
    }
}

export default Resume;