import React, { PureComponent } from 'react';
import styles from './scss/main.scss';

export default class IndexSreen extends PureComponent {

    render() {
        return (
            <section className={`${styles.section} ${styles.about}`} id="contacts">
                <div className={styles.content}>
                    <h5>Контакты</h5>
                    <h2>Контактная информация</h2>    
                    <p><b>Елена</b> - 8 (950) 111-22-33</p>
                    <p><b>Муж Елены</b> - 8 (910) 111-22-33</p>
                </div>
            </section>
        );
    }
}