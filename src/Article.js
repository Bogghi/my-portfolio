import React from 'react';

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
            <div className="resp-spacing">
                <h6>{this.title}</h6>
                <div className="article">{link}</div>
            </div>
        )
    }
}

export default Article;