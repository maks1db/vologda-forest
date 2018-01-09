import React, { PureComponent } from 'react';
import styles from './scss/main.scss';
import ScrollAnimation from 'react-animate-on-scroll';

export default class ContactsSreen extends PureComponent {

    onScroll = () => {
        if (window.innerHeight + window.pageYOffset - 100 >= this.item.offsetTop) {
            (function(w, d, n, s, t) {
  
                t = d.getElementsByTagName('script')[0];
                s = d.createElement('script');
                s.type = 'text/javascript';
                s.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A51e9ad376cf796b9b07800f2f0e6b59fce7eeee22b050d6dd7dcd882404654df&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=false&amp;id=map';
                s.async = true;
                t.parentNode.insertBefore(s, t);

            })(window, document); 

            window.removeEventListener('scroll', this.onScroll);
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        this.onScroll();
    }

    render() {
        return (
            <div ref={(e) => this.item = e}>
                <section className={`${styles.section} 
                    ${styles.section_empty} 
                    ${styles.compact }`} id="contacts">
                    <div className={styles.content}>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <h5>Контакты</h5>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <h2>Контактная информация</h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <p><b>г.&nbsp;Липецк,&nbsp;Трубный&nbsp;проезд,&nbsp;вл.&nbsp;6</b></p>
                        </ScrollAnimation> 
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <p>
                                <b>+7 (4742) 71-82-94, 34-80-94,<br />
                                +7 (951) 301-84-59</b>
                            </p>
                        </ScrollAnimation> 
                        
                    </div>
                </section>
                <div id="map"></div>
            </div>
        );
    }
}