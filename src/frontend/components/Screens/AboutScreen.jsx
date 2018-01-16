import React, { PureComponent } from 'react';
import scrollTo from 'helpers/scrollTo';
import ScrollAnimation from 'react-animate-on-scroll';

if (process.env.BROWSER) {
    require('./scss/main.scss');
}

export default class AboutScreen extends PureComponent {

    render() {
        return (
            <section className="section section_background" id="about">
                <div className="content">
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <h5>О НАС</h5>       
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={-300}>
                        <h2>Здравствуйте!</h2>       
                        <div className="toLeft">   
                            <p className="ident_20">Компания "Вологодский лес" предлагает Вам приобрести пиломатериалы как премиум-класса, так и бюджетной категории по выгодным ценам со склада в Липецкой области. Более 15 лет на рынке. Производим широкий сортимент из Вологодского леса.</p> 
                            <p className="ident_20">
                                Для вас мы предоставим:
                            </p>
                            <p>
                                <ul>
                                    <li>качественные пиломатериалы;</li>
                                    <li>осуществим доставку своим транспортом;</li>
                                    <li>доставка по <a onClick={() => scrollTo('#contacts')}>первому звонку</a>;</li>   
                                </ul>
                            </p>
                        </div>       
                    </ScrollAnimation>
                </div>
            </section>
        );
    }
}