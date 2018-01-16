import React from 'react';

if (process.env.BROWSER) {
    require('./scss/screen.scss');
}


const imgCount = 4;

export default class MainScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            width: 0,
            activeImg: 0
        };
    }

    onResize = () => {
        if (process.env.BROWSER) {
            this.setState({
                width: window.innerWidth
            });
        }
        
    };

    componentWillMount() {
        if (process.env.BROWSER) {
            window.addEventListener('resize', this.onResize);
        }
        this.onResize();

        this.timer = setInterval(() => {
            let activeImg = this.state.activeImg + 1;
            if (activeImg > imgCount - 1) {
                activeImg = 0;
            }

            this.setState({activeImg, setActive:true});
        },25000);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
        clearInterval(this.timer);
    }

    render() {
        const {
            width,
            activeImg
        } = this.state;

        let items = [];
        let i = 1;
        for (i = 1; i<=imgCount; i++) {
            items.push({
                id:i-1,
                url: `/assets/images/img_${i}.jpg`,
                position: 0
            });
        }

        let a = activeImg -1; i= 0;
        while (a>= 0) {
            i++;
            items[a].position = -i * width;
            a -= 1;
        }

        a = activeImg + 1; i = 0;
        for (a = activeImg + 1; a<=imgCount-1; a++) {
            i++;
            items[a].position = i * width;
        }
        return (
            (
                <div className="subheader" id="main">
                    <div className="screens">
                        {
                            items.map(x=>(<div
                                key={x.id} 
                                style={
                                    {
                                        background:`url("${x.url}")`,
                                        transform: `translateX(${x.position}px)`,
                                        backgroundSize:'cover',
                                        backgroundPosition: '50% 50%'
                                    }
                                }
                            ></div>))       
                        }  
                    </div>
                    {this.props.children}
                </div>
            )
        );
    }
}