import React from 'react';

class DropdownList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],
            upOrDown: false
        }
    }

    render(){
        const list = this.state.list;
        let r = [],
            i = 0;

        for (const key in list) {
            if (Object.hasOwnProperty.call(list, key)) {
                const e = list[key];
                r.push(<DrElement key={i} value={e}/>);
                i++;
            }
        }

        return (
            <div className='d-list'>
                <div 
                    className='d-head' 
                    onClick={() => this.showList(this.props.list, this.state.upOrDown)}>
                    {!this.state.upOrDown ? '▲' : '▼'} {this.props.title}
                </div>
                <div className='d-body'>
                    <ul>
                        {r}
                    </ul>
                </div>
            </div>
        )
    }

    showList(list, uOd){
        let obj = {
            upOrDown: !uOd
        }
        obj['list'] = uOd ? [] : list;
        this.setState(obj);
    }

}

function DrElement(props){
    return(
        <li className='d-ele'>{props.value}</li>
    )
}

export default DropdownList;