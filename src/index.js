import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Sep() {
    return (
        <div className="sep"></div>
    )
}

function Heading (props) {
    return (
        <div className="title">
            <h1>{props.value}</h1>
        </div>
    )
}

function QuickDesc (props) {
    return (
        <div className="desc">
            {props.value}
        </div>
    )
}

class Work extends React.Component {
    constructor(props){
        super(props);
        this.title = 'work';
    }

    render() {
        const jobs = this.props.dataLink;
        const a = [];
        for (const k in jobs) {
            if (Object.hasOwnProperty.call(jobs, k)) {
                const e = jobs[k];
                const jl = Object.keys(jobs).length;
                const current = Object.keys(jobs)[Object.keys(jobs).length-(jl-1)];
                a.push(
                    <div 
                        className="occupation" 
                        key={k} 
                        title={k === current ? 'current occupation' : ''}>
                        <a
                            key = {k+'_a'}
                            href={e}
                            rel="noopener noreferrer"
                            onClick={()=> this.props.workHandleClick(k)}>
                            {k}
                        </a>
                        <span key = {k+'_span'}>{k === current ? '🧘🏼' : ''}</span>
                    </div>
                )
            }
        }
        return (
            <div className="work">
                <h6>{this.title}</h6>
                <div className="container">{a}</div>
            </div>
        )
    }
}

class Article extends React.Component {
    constructor(props){
        super(props);
        //type is ither _blank (external link) or _self (local link)
        this.state = {
            'Digitalize your life': {
                type: '_blank',
                link: 'https://medium.com/@BogghiIsThere/digitalize-your-life-trust-me-its-worth-it-f3386a7521dd'
            }
        };
        this.title = 'Article';
    }

    render() {
        const a = this.state;
        const link = [];

        for (const k in a) {
            if (Object.hasOwnProperty.call(a, k)) {
                const e = a[k];
                link.push(
                    <a
                        key={k+'_a'}
                        target={e['type']}
                        rel="noopener noreferrer"
                        href={e['link']}>
                        {k}
                    </a>
                )
            }
        }
        return (
            <div>
                <h6>{this.title}</h6>
                <div className="article">{link}</div>
            </div>
        )
    }
}

class Link extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
            Github: 'https://github.com/Bogghi',
            Twitter: 'https://twitter.com/BogghiIsThere',
            Linkedin: 'https://www.linkedin.com/in/matteosimoneborghi/'
        }
    }
    
    render(){
        const a = [];
        for (const key in this.state) {
            if (Object.hasOwnProperty.call(this.state, key)) {
                const e = this.state[key];
                const separator = Object.keys(this.state)[Object.keys(this.state).length-1];
                a.push(
                    <div key={key} className="s-link">
                        <a
                            key={key+'_a'} 
                            target="_blank"
                            rel="noopener noreferrer" 
                            href={e}>{key}
                        </a> 
                        {separator !== key ? <span key={key+'_span'}>•</span> : ""}
                    </div>
                )       
            }
        }
        return (
            <div className="link">{a}</div>
        )
    }
}


class LeftContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Matteo Borghi',
            desc: 'Perseverance is my talent and long life learning is main life driver. Currently based in Lissone (MB). Tech, Self Improvment, Fantasy Book are among my interest',
        }
    }

    render() {
        return (
            <div className="left-container">
                <Heading value={this.state.title}/>
                <Sep />
                <QuickDesc value={this.state.desc}/>
                <Link/>
                <Article />
                <Work 
                    dataLink={this.props.dataLink}
                    workHandleClick={this.props.workHandleClick}/>
            </div>
        )
    }
}

class RightContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imgOne : '/img/picture_1.jpg',
            imgTwo : '/img/picture_2.jpg'
        }
    }
    
    render(){
        const imgs = this.state;
        const e = [];
        for (const k in imgs) {
            if (Object.hasOwnProperty.call(imgs, k)) {
                const img = imgs[k];
                e.push(
                    <img src={img} alt="img"/>
                )              
            }
        }

        return (
            <div className="right-container">
                {e}
            </div>
        )
    }
}

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            workLink: {
                Resume: '#',
                Auto1: '#',
                Quantyca: '#',
            },
            rightContent: {}
        }
        this.workHandleClick = this.workHandleClick.bind(this);
    }

    render(){
        return (
            <div className="container">
                <LeftContainer 
                    dataLink={this.state.workLink}
                    workHandleClick={this.workHandleClick}/>
                <RightContainer/>
            </div>
        );
    }

    workHandleClick(i){
        this.setState({
            rightContent: {
                title: i
            }
        });
    }

    componentDidUpdate(){
        console.log(this.state);
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Container />
            </div>
        );
    } 
}

//==========================================

ReactDOM.render(
<Main />,
document.getElementById('root')
);