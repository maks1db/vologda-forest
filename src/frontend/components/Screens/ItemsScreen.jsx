import React, { PureComponent } from 'react';
import styles from './scss/main.scss';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 
import Price from 'Controls/Price.jsx';
import ScrollAnimation from 'react-animate-on-scroll';

const Item = ({ img, name, posY, children, price }) => (
    
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
                        <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                            <Item 
                                img={'wood.jpg'}
                                name={'Доска'}
                                price="от 200 руб."
                            >
                                Один из наиболее популярных материалов, использующихся в деревянном строительстве и отделке.
                            </Item>
                            <Item 
                                img={'brus.jpg'}
                                name={'Брус'}
                                price="от 300 руб."
                            >
                                Экологичный и безопасный пиломатериал, широко используемый при строительстве загородных домов.
                            </Item>
                            <Item 
                                img={'vagonka.jpg'}
                                name={'Вагонка'}
                                price="от 400 руб."
                            >
                                Это натуральный пиломатериал, который специально заточен под отделку и имеет соответствующую форму.
                            </Item>
                            <Item 
                                img={'brus_2.jpeg'}
                                price="от 100 руб."
                                name={'Имитация бруса'}
                            >
                                Применяется для внутренней и наружной облицовки помещений разного типа.
                            </Item>
                            <Item 
                                img={'pol.jpg'}
                                price="от 50 руб."
                                name={'Половая доска'}
                            >
                                Подойдут всем, кому нужна натуральность, красота, долговечность и экологичность.
                            </Item>
                            <Item 
                                img={'block.jpg'}
                                price="от 100 руб."
                                name={'Блок-хаус'}
                            >
                                Предназначена для внутренней и внешней декоративной отделки помещений и зданий.
                            </Item>
                            <Item 
                                img={'vagonka-lipa.jpg'}
                                price="от 100 руб."
                                name={'Вагонка из липы'}
                            >
                            Липа – это уникальный материал, который часто используется для парной. Она обладает относительной прочностью идолговечностью.
                            </Item>
                        </ScrollAnimation>
                    </Row>
                </div>   
            </section>
        );
    }
}