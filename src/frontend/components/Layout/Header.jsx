import React from 'react';
import styles from './scss/header.scss';
import NavLi from './NavLi.jsx';
import classname from 'helpers/classname.js';
import ToTop from 'react-scroll-top';
import scrollTo from 'helpers/scrollTo';

const NavItems = () => {
    return(
        <ul>
            <NavLi href='/' title="Главная" onClick={() => scrollTo('#main')}/>
            <NavLi title="О нас" onClick={() => scrollTo('#about')}/>
            <NavLi title="Продукция" onClick={() => scrollTo('#items')} />
            <NavLi title="Контакты" onClick={() => scrollTo('#contacts')} />
        </ul>);
};

export default class Header extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            background: false
        };
    }

    onScroll = () => {
        const background = this.state.background;

        if (background && window.scrollY < 10) {
            this.setState({background: false});
        }

        if (!background && window.scrollY > 10) {
            this.setState({background: true});
        }

    }

    componentWillMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWIllUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    render() {

        return (<div {...classname({[styles.background]: this.state.background}, styles.header)}>
            <div className={styles.title}>Вологодский лес</div> 
            <nav className={styles.navigation}>
                <NavItems />   
            </nav>
            <div className={styles['to-top']} >
                <ToTop 
                    hideAt={100} 
                    position="bottom" 
                />
            </div>
        </div>);
    }
}