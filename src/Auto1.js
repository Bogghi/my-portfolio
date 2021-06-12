import React from 'react';

//import componentes
import Heading from './components/heading';
import TimeSpan from './components/time-span';
import Paragraph from './components/paragraph';
import SubHeading from './components/sub-heading';
import Quote from './components/quote';
import Spacer from './components/spacer';
import DropdownList from './components/dropdown-list';
import './article.css';

class Auto1 extends React.Component{
    constructor(props){
        super(props)
        this.title = 'Auto1';
        this.start = 'JAN 2021';
        this.end = 'PRESENT';
        this.subHeading = {
            0: 'Why have I changed?',
            1: 'Junior Web Developer'
        }
        this.text = {
            0: `During the search for my new job as a Web Developer, I've got asked a lot why I was searching for this new job and why I was changing career so I decided to put here my overall answer to this question here.`,
            1: `During my time at Quantyca I've learned a lot of stuff and from all of them, the thing that stands out the most is self-awareness about who I want to be and what I want to do with this unique life. `,
            2: `I Always knew that I was somewhat good at coding and I enjoy it doing. The creativity and the fire that I felt every time while coding was something amazing and that it must me explored to understand how good I can be as a developer, so I joined boolean to from the skill set needed to become a developer ( More details about what I've learned in boolean in my Resume ) and a moth from the  end of it I stated in Auto1, full of energy and excitement for the start of my new journey`,
            3: `I've joined Auto1 as my first experience in the Web Development world and I'm helping the current dev team ( 2 Junior and 1 Senior ) to evolve the existing tools and creating new ones to automate or improve company process or logic. `
        }
        this.tools = [
            'PHP','JQuery','Bootstrap','SQL','MySql'
        ]
    }

    render(){
        return(
            <div className='text-padding'>
                <Heading value={this.title}/>
                <SubHeading value={this.subHeading[0]}/>
                <Paragraph
                    pre=''
                    value={this.text[0]}/>
                <Paragraph
                    pre=''
                    value={this.text[1]}/>
                <Quote value={this.text[2]}/>
                <Spacer/>
                <TimeSpan
                    start={this.start}
                    end={this.end}/>
                <SubHeading value={this.subHeading[1]}/>
                <Paragraph
                    pre=''
                    value={this.text[3]}/>
                <DropdownList
                    title='Tools'
                    list={this.tools}/>
                <Spacer/>
            </div>
        )
    }
}

export default Auto1;