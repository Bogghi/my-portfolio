import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './Resume';
import Quantyca from './Quantyca';
import Auto1 from './Auto1';
import Work from './Work';
import Article from './Article';

//componenets
import Heading from './components/heading.js';
import QuickDesc from './components/quick-desc.js';
import Sep from './components/separator.js';
import HomeDropdown from './components/home-dropdown';
import './css/index.css';

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
            isDesktop: false
        }
        this.updatePredicate = this.updatePredicate.bind(this);
    }

    render() {
        const isDesktop = this.state.isDesktop;

        return (
            <div className="left-container">
                <Heading value={this.state.title}/>
                <Sep />
                <QuickDesc value={this.state.desc}/>
                <Link/>
                {isDesktop ?
                    <div>
                        <Article />
                        <Work 
                            dataLink={this.props.dataLink}
                            workHandleClick={this.props.workHandleClick}/>
                    </div> :
                    <HomeDropdown
                        dataLink={this.props.dataLink}
                        workHandleClick={this.props.workHandleClick}/>
                }
            </div>
        )
    }

    componentDidMount(){
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate(){
        this.setState({isDesktop: window.innerWidth > 1024 })
    }
}

class RightContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: {
                imgOne : '/img/picture_1.jpg',
                imgTwo : '/img/picture_2.jpg'
            },
            exp: {
                Resume: <Resume/>,
                Quantyca: <Quantyca/>,
                Auto1: <Auto1/>
            }
        }
    }
    
    render(){
        let e;

        if(this.props.home){
            e = [];
            const imgs = this.state.img;
            for (const k in imgs) {
                if (Object.hasOwnProperty.call(imgs, k)) {
                    const img = imgs[k];
                    e.push(
                        <img
                            key={k+"_img"} 
                            src={img} 
                            alt="img"/>
                    )              
                }
            }
        }else {
            e = this.state.exp[this.props.rightContent];
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
            home: true,
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
                <RightContainer
                    home = {this.state.home}
                    rightContent = {this.state.rightContent}/>
            </div>
        );
    }

    workHandleClick(i){
        this.setState({
            rightContent: i,
            home: false
        });
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

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

//==========================================
