import React, { PureComponent } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import scrollTo from 'helpers/scrollTo';

if (process.env.BROWSER) {
    require('./scss/main.scss');
}

export default class IndexSreen extends PureComponent {

    render() {
        return (
            <div className="main" id="main">
                <article className="article">
                    <div>
                        <h4>
                            г.&nbsp;Липецк, Трубный&nbsp;проезд, вл.&nbsp;6<br />
                            +7 (4742) 71-82-94, 34-80-94,<br />
                            +7 (951) 301-84-59
                        </h4>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true} offset={-200}>
                            <h1>Вологодские пиломатериалы в Липецке</h1>       
                        </ScrollAnimation>
                        <a href="#request" onClick={(e) => {
                            const selector = '#request';
                            e.preventDefault();
                            
                            if(history.pushState) {
                                history.pushState(null, null, selector);
                            }
                            else {
                                location.hash = selector;
                            }
                            scrollTo(selector);
                        }} className="register">
                            Заказать звонок<span className="fa fa-long-arrow-right"></span>
                        </a>
                        <h4>
                            Есть вопросы? <br/>
                            Оставьте заявку на звонок прямо сейчас
                        </h4>       

                    </div>
                </article>         
            </div>
        );
    }
}