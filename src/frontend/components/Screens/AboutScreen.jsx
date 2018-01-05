import React, { PureComponent } from 'react';
import styles from './scss/main.scss';
import scrollTo from 'helpers/scrollTo';

export default class AboutScreen extends PureComponent {

    render() {
        return (
            <section className={`${styles.section} ${styles.about}`} id="about">
                <div className={styles.content}>
                    <h5>О НАС</h5>
                    <h2>Здравствуйте!</h2> 
                    <div className={styles.toLeft}>   
                        <p className={styles.ident_20}>Компания "Вологодский лес" предлагает Вам приобрести пиломатериалы как премиум-класса, так и бюджетной категории по выгодным ценам со склада в Липецкой области. Более 15 лет на рынке. Производим широкий сортимент из Вологодского леса.</p> 
                        <p className={styles.ident_20}>
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
                </div>
            </section>
        );
    }
}