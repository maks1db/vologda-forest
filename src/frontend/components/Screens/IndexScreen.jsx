import React, { PureComponent } from 'react';
import styles from './scss/main.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import scrollTo from 'helpers/scrollTo';

export default class IndexSreen extends PureComponent {

    render() {
        return (
            <div className={styles.main}>
                <article className={styles.article}>
                    <div>
                        <h4>
                            г. Липецк, Трубный проезд, 6<br />
                            +7 (4742) 34-80-94
                        </h4>
                        <ScrollAnimation animateIn="zoomIn" delay={100} animateOnce={true}>
                            <h1>Вологодские пиломатериалы в Липецке</h1>       
                        </ScrollAnimation>
                        <a onClick={() => scrollTo('#request')} className={styles.register}>
                            Оставить заявку<span className="fa fa-long-arrow-right"></span>
                        </a>
                        <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                            <h4>Оставьте заявку на звонок прямо сейчас</h4>       
                        </ScrollAnimation>
                        
                    </div>
                </article>         
            </div>
        );
    }
}