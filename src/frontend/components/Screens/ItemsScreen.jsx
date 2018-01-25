import React, { PureComponent } from 'react';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 
import Price from 'Controls/Price.jsx';
import ScrollAnimation from 'react-animate-on-scroll';

if (process.env.BROWSER) {
    require('./scss/main.scss');
}

const Item = ({ img, name, posY, children, price }) => (
    
    <Col number={4}>
        <div className="box">
            <div className="img" style={{
                backgroundImage: `url("/assets/images/items/${img}")`,
                backgroundPositionY: posY ? '0px' : 'none'
            }}></div>
            <h3 className="bold">{name}</h3>
            <Price>{price}</Price>
            <p>{children}</p>
        </div>
    </Col>
    
);

export default class IndexSreen extends PureComponent {

    constructor() {
        super();

        this.state = {
            show: false
        };
    }

    onScroll = () => {
        const scroll = window.scrollY;
        if (this.item.offsetTop <= scroll + 300) {
            this.setState({
                show: true
            });    
            window.removeEventListener('scroll', this.onScroll);
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    render() {

        const { show } = this.state;

        return (
            <section className="section section_empty compact" id="items" ref={(e) => this.item = e }>
                <div className="content">
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <h5>НАША ПРОДУКЦИЯ</h5>
                    </ScrollAnimation>
                    { show && <Row >
                        <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                            <Item 
                                img={'wood.jpg'}
                                name={'Доска'}
                                price="от 150 руб."
                            >
                                Один из наиболее популярных материалов, использующихся в деревянном строительстве и отделке.
                            </Item>
                            <Item 
                                img={'brus.jpg'}
                                name={'Брус'}
                                price="от 500 руб."
                            >
                                Экологичный и безопасный пиломатериал, широко используемый при строительстве загородных домов.
                            </Item>
                            <Item 
                                img={'vagonka.jpg'}
                                name={'Вагонка'}
                                price="от 54 руб."
                            >
                                Это натуральный пиломатериал, который специально заточен под отделку и имеет соответствующую форму.
                            </Item>
                            <Item 
                                img={'brus_2.jpeg'}
                                price="от 84 руб."
                                name={'Имитация бруса'}
                            >
                                Применяется для внутренней и наружной облицовки помещений разного типа.
                            </Item>
                            <Item 
                                img={'pol.jpg'}
                                price="от 372 руб."
                                name={'Половая доска'}
                            >
                                Подойдут всем, кому нужна натуральность, красота, долговечность и экологичность.
                            </Item>
                            <Item 
                                img={'block.jpg'}
                                price="от 468 руб."
                                name={'Блок-хаус'}
                            >
                                Предназначена для внутренней и внешней декоративной отделки помещений и зданий.
                            </Item>
                            <Item 
                                img={'vagonka-lipa.jpg'}
                                price="от 91 руб."
                                name={'Вагонка из липы'}
                            >
                                Липа – это уникальный материал, который часто используется для парной. Она обладает прочностью и долговечностью.
                            </Item>
                        </ScrollAnimation>
                    </Row> }
                </div>   
            </section>
        );
    }
}