import React, { PureComponent } from 'react';
import styles from './scss/main.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import scrollTo from 'helpers/scrollTo';

export default class IndexSreen extends PureComponent {

    render() {
        return (
            <div className={styles.main} id="main">
                <article className={styles.article}>
                    <div>
                        <h4>
                            г.&nbsp;Липецк, Трубный&nbsp;проезд, вл.&nbsp;6<br />
                            +7 (4742) 71-82-94, 34-80-94,<br />
                            +7 (951) 301-84-59
                        </h4>
                        <ScrollAnimation animateIn="zoomIn" animateOnce={true} offset={-200}>
                            <h1>Вологодские&nbsp;пиломатериалы в&nbsp;Липецке</h1>       
                        </ScrollAnimation>
                        <a onClick={() => scrollTo('#request')} className={styles.register}>
                            Заказать звонок<span className="fa fa-long-arrow-right"></span>
                        </a>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={1000} offset={-200}>
                            <h4>
                                Есть вопросы? <br/>
                                Оставьте заявку на звонок прямо сейчас
                            </h4>       
                        </ScrollAnimation>
                    </div>
                </article>         
            </div>
        );
    }
}