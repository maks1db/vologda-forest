import React, { PureComponent } from 'react';
import styles from './scss/main.scss';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 
import ScrollAnimation from 'react-animate-on-scroll';

const Advantage = ({ ico, children, delay}) => (
    <Col number={4}>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={delay}>
            <div className={styles.advantage}>
                <div className={styles.advantage_icon}><i className={`fa ${ico}`}></i></div> 
                <h3>{ children }</h3>						
            </div>
        </ScrollAnimation>
    </Col>
);

export default class AdvantageSreen extends PureComponent {

    render() {
        return (
            <section className={`${styles.section} ${styles.section_empty} ${styles.section_disable_bottom }`} id="advantage">
                <div className={styles.content}>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <h5>НАШИ ПРЕИМУЩЕСТВА</h5>
                    </ScrollAnimation>
                    <Row>
                        <Advantage delay={100} ico="fa-tree">Огромный выбор пиломатериалов</Advantage>
                        <Advantage delay={300} ico="fa-car">Доставка по городу и области</Advantage>
                        <Advantage delay={500} ico="fa-volume-control-phone">Доставка по первому звонку</Advantage> 
                    </Row>
                </div>   
            </section>
        );
    }
}