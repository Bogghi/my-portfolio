import React from 'react';

//import componentes
import Heading from './components/heading';
import TimeSpan from './components/time-span';
import Paragraph from './components/paragraph';
import SubHeading from './components/sub-heading';
import './article.css';

class Quantyca extends React.Component{
    constructor(props){
        super(props)
        this.title = 'Quantyca';
        this.start = 'SET 2017';
        this.end = 'JUN 2019';
        this.text = {
            0: `I've joined Quantyca in the September of 2017 right after I graduated from high school ( ITI Hensemberger ) and started a part-time experience as a Data Integration Specialist.`,
            1: `My job in this role was to help the team build a strong and scalable ETL infrastructure for DWH supply using  Talend. I've also worked on creating and deploying SOAP web service with the scope of groceries home delivery.`,
            2: `In June 2019 I've decided to quit the university, that I started a side of my part-time job, to focus fully on work because I felt and saw a much bigger growth in me from the work I was doing compared to what university given me.`,
            3: `In this new position, my new duty was post-go-live maintenance of the project infrastructure. For example, let's say that that a data supply chain was deployed for the client now the next step is the monitoring, maintenance and tuning of it. This range of activity implicated huge human interaction between both the Dev Team and the client directly.`,
            4: `I've worked at Quantyca for almost 3 years and I've grown in so many ways. From the professionalism that I've acquired from my senior colleagues and the management that proved time and time again their value, to the human aspect. I've changed and matured and this pushed me into a new world of excitement.`,
            5: `This experience taught me how to work and deliver high-quality work that everyone can work on. It also taught me what team-works mean and it let me saw hands first in action the power of a team aligned in one direction.`
        };
        this.subHeading = {
            0: 'Data Integration Specialist',
            1: 'Infrastructure & Operations Specialist'
        };
        this.subTitle = `What I've learned`;
    }

    render(){
        return(
            <div className='text-padding top-padding'>
                <Heading value={this.title}/>
                <TimeSpan
                    start={this.start}
                    end={this.end}/>
                <SubHeading value={this.subHeading[0]}/>
                <Paragraph
                    pre=''
                    value={this.text[0]}/>
                <Paragraph
                    pre=''
                    value={this.text[1]}/>
                <Paragraph
                    pre=''
                    value={this.text[2]}/>
                <SubHeading value={this.subHeading[1]}/>            
                <Paragraph
                    pre=''
                    value={this.text[3]}/>
                <SubHeading value={this.subTitle}/>
                <Paragraph
                    pre=''
                    value={this.text[4]}/>
                <Paragraph
                    pre=''
                    value={this.text[5]}/>
            </div>
        )
    }
}

export default Quantyca;