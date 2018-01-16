import React, { PureComponent } from 'react';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 
import ScrollAnimation from 'react-animate-on-scroll';

if (process.env.BROWSER) {
    require('./scss/main.scss');
}

const Advantage = ({ ico, children, delay}) => (
    <Col number={4}>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={delay}>
            <div className="advantage">
                <div className="advantage_icon"><i className={`fa ${ico}`}></i></div> 
                <h3>{ children }</h3>						
            </div>
        </ScrollAnimation>
    </Col>
);

export default class AdvantageSreen extends PureComponent {

    render() {
        return (
            <section className="section section_empty section_disable_bottom compact" id="advantage">
                <div className="content">
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