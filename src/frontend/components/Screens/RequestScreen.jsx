import React, { PureComponent } from 'react';
import styles from './scss/main.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 

const Item = ({ ico, children }) => (
    <ScrollAnimation animateIn="slideInLeft" animateOnce={true} offset={-120}>
        <div className={styles.request_item}>
            <div className={styles.request_icon}><i className={`fa ${ico}`}></i></div>
            <p>{children}</p>
        </div>
    </ScrollAnimation>
);

export default class IndexSreen extends PureComponent {

    render() {
        return (
            <section className={`${styles.section} ${styles.section_background}`} id="request">
                <div className={styles.content}>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <h5>Есть вопросы?</h5>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <h2>Оставьте заявку и мы свяжемся с вами в течении 10 минут</h2>
                    </ScrollAnimation>
                    <Row>
                        <Col number={6}>
                            <Item ico="fa-shopping-cart">
                                Большой ассортимент - более 20 видов наименований
                            </Item>
                            <Item ico="fa-percent">
                                Подберем для вас оптимальное и наиболее выгодное решение
                            </Item>
                            <Item ico="fa-refresh">
                                Быстрая обработка заявок, оперативная доставка
                            </Item>
                        </Col>
                        <Col number={6}>П</Col>
                    </Row>
                </div>
            </section>
        );
    }
}