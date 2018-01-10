import React, { PureComponent } from 'react';
import styles from './scss/main.scss';
import styles_request from './scss/request.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 
import Input from 'Controls/Input.jsx';
import Textarea from 'Controls/Textarea.jsx';

const Item = ({ ico, children }) => (
   
    <div className={styles.request_item}>
        <div className={styles.request_icon}><i className={`fa ${ico}`}></i></div>
        <p>{children}</p>
    </div>
    
);

const init = (key, props) => {
    return {
        errorMessage: props[key].error,
        defaultValue: props[key].value,
        onChange: (e) => props.onChangeKey(key, e.target.value)
    };
};

export default class IndexSreen extends PureComponent {

    render() {

        const { onSendRequest, message } = this.props;

        return (
            <section className={`${styles.section} ${styles.section_background}`} id="request">
                <div className={styles.content} style={{
                    paddingLeft: '15px',
                    paddingRight: '15px'
                }}>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <h5>Есть вопросы?</h5>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <h2>Оставьте заявку и мы свяжемся с вами в ближайшее время</h2>
                    </ScrollAnimation>
                    <Row>
                        <Col number={6}>
                            <ScrollAnimation animateIn="slideInLeft" animateOnce={true} offset={-120}>
                                <Item ico="fa-shopping-cart">
                                Большой ассортимент - более 20 видов наименований
                                </Item>
                                <Item ico="fa-percent" animation="fadeInUp">
                                Подберем для вас оптимальное и наиболее выгодное решение
                                </Item>
                                <Item ico="fa-refresh">
                                Быстрая обработка заявок, оперативная доставка
                                </Item>
                            </ScrollAnimation>
                        </Col>
                        <Col number={6}>
                            <ScrollAnimation animateIn="fadeInRight" animateOnce={true} offset={-100}>
                                <div className={styles_request.controls}>
                                    <Input
                                        label="Ваше имя*"
                                        {...init('name', this.props)}
                                    />
                                    <Input
                                        label="Ваш телефон*"
                                        mask={'+7 (999) 999-99-99'}
                                        maskChar='_'
                                        {...init('phone', this.props)}
                                    />
                                    <Textarea
                                        label="Комментарий"
                                        rows={5}
                                        {...init('description', this.props)}
                                    />
                                    <button 
                                        onClick={onSendRequest}
                                        disabled={message.send || message.isFetching}
                                        style={{
                                            background:'#FFDC40',
                                            color:'#313131',
                                            borderColor: '#FFDC40',
                                            fontWeight: 600
                                        }}
                                        type="button" 
                                        className="btn btn-success">
                                        {message.isFetching ? 'Отправляется...' : 
                                            message.send ? 'Заявка отправлена' : 'Заказать звонок' }
                                    </button>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}