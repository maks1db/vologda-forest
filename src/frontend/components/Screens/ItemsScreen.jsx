import React, { PureComponent } from 'react';
import styles from './scss/main.scss';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 
import Price from 'Controls/Price.jsx';
import ScrollAnimation from 'react-animate-on-scroll';

const Item = ({ img, name, posY, children, price }) => (
    <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
        <Col number={4}>
            <div className={styles.box}>
                <div className={styles.img} style={{
                    backgroundImage: `url("/assets/images/items/${img}")`,
                    backgroundPositionY: posY ? '0px' : 'none'
                }}></div>
                <h3 className={styles.bold}>{name}</h3>
                <Price>{price}</Price>
                <p>{children}</p>
            </div>
        </Col>
    </ScrollAnimation>
);

export default class IndexSreen extends PureComponent {

    render() {
        return (
            <section className={`${styles.section} ${styles.section_empty} ${styles.compact}`} id="items">
                <div className={styles.content}>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <h5>НАША ПРОДУКЦИЯ</h5>
                    </ScrollAnimation>
                    <Row>
                        <Item 
                            img={'wood.jpg'}
                            name={'Доска'}
                            price="от 200 руб."
                        >
                            Описание материала
                        </Item>
                        <Item 
                            img={'brus.jpg'}
                            name={'Брус'}
                            price="от 300 руб."
                        >
                            Описание материала 2
                        </Item>
                        <Item 
                            img={'vagonka.jpg'}
                            name={'Вагонка'}
                            price="от 400 руб."
                        >
                            Описание материала 3
                        </Item>
                        <Item 
                            img={'brus_2.jpeg'}
                            price="от 100 руб."
                            name={'Имитация бруса'}
                        >
                            Описание материала 4
                        </Item>
                        <Item 
                            img={'pol.jpg'}
                            price="от 50 руб."
                            name={'Половая доска'}
                        >
                            Описание материала 5
                        </Item>
                        <Item 
                            img={'block.jpg'}
                            price="от 100 руб."
                            name={'Блок-хаус'}
                        >
                            Описание материала 6
                        </Item>
                    </Row>
                </div>   
            </section>
        );
    }
}