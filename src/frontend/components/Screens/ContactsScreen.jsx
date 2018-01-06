import React, { PureComponent } from 'react';
import styles from './scss/main.scss';
import ScrollAnimation from 'react-animate-on-scroll';

export default class IndexSreen extends PureComponent {

    render() {
        return (
            <section className={`${styles.section} ${styles.section_empty}`} id="contacts">
                <div className={styles.content}>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <h5>Контакты</h5>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <h2>Контактная информация</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <p><b>Елена</b> - 8 (950) 111-22-33</p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <p><b>Антон</b> - 8 (910) 111-22-33</p>
                    </ScrollAnimation>  
                </div>
            </section>
        );
    }
}