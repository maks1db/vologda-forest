import React, { PureComponent } from 'react';
import styles from './scss/main.scss';
import ScrollAnimation from 'react-animate-on-scroll';

export default class IndexSreen extends PureComponent {

    render() {
        return (
            <div className={styles.main}>
                <article className={styles.article}>
                    <div>
                        <h4>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                                Здесь адрес<br />
                                Здесь телефон
                            </ScrollAnimation>
                        </h4>
                        <ScrollAnimation animateIn="zoomIn" delay={100} animateOnce={true}>
                            <h1>Вологодские пиломатериалы в Липецке</h1>       
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={700}>
                            <a to="/register" className={styles.register}>
                                Оставить заявку<span className="fa fa-long-arrow-right"></span>
                            </a>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" delay={200} animateOnce={true}>
                            <h4>Доставка по городу и области на своем транспорте</h4>       
                        </ScrollAnimation>
                        
                    </div>
                </article>         
            </div>
        );
    }
}