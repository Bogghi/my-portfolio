import React from 'react';

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
                            key={k + '_a'}
                            href={e}
                            rel="noopener noreferrer"
                            onClick={() => this.props.workHandleClick(k)}>
                            {k}
                        </a>
                        <span key={k + '_span'}>{k === current ? '🧘🏼' : ''}</span>
                    </div>
                );
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

export default Work;