import React, { PureComponent } from 'react';
import styles from './scss/main.scss';

export default class IndexSreen extends PureComponent {

    render() {
        return (
            <div className={styles.main}>
                <article className={styles.article}>
                    <div>
                        <h4>
                            Здесь адрес<br />
                            Здесь телефон
                        </h4>
                        <h1>Вологодские пиломатериалы в Липецке</h1>
                        <a to="/register" className={styles.register}>
                            Оставить заявку<span className="fa fa-long-arrow-right"></span>
                        </a>
                        <h4>Доставка по городу и области</h4>
                    </div>
                </article>         
            </div>
        );
    }
}