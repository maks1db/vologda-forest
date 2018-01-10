import React from 'react';
import styles from './scss/header.scss';
import NavLi from './NavLi.jsx';
import classname from 'helpers/classname.js';
import ToTop from 'react-scroll-top';
import scrollTo from 'helpers/scrollTo';

const navClick = (selector, onClick, event) => {
    event.preventDefault();
    if(history.pushState) {
        history.pushState(null, null, selector);
    }
    else {
        location.hash = selector;
    }
    scrollTo(selector);
    onClick();
};

const NavItems = ( { onClick }) => {
    return(
        <ul>
            <NavLi title="Главная" href="#main" onClick={(e) => {
                navClick('#main', onClick, e);
            }}/>
            <NavLi title="О нас" href="#about" onClick={(e) => {
                navClick('#about', onClick, e);
            }}/>
            <NavLi title="Продукция" href="#items" onClick={(e) => {
                navClick('#items', onClick, e);
            }} />
            <NavLi title="Контакты" href="#contacts" onClick={(e) => {
                navClick('#contacts', onClick, e);
            }} />
        </ul>);
};

export default class Header extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            background: false, 
            activeMenu: false
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

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onChangeActiveMenu = (value) => {
        const { activeMenu } = this.state;
        this.setState({ activeMenu: value !== undefined ? value : !activeMenu});
    }

    render() {

        const { activeMenu } = this.state;

        return (<div {...classname({[styles.background]: this.state.background}, styles.header)}>
            <div className={styles.title}>Вологодский лес</div> 
            <nav {...classname({[styles.active_menu]: activeMenu}, styles.navigation)}>
                <NavItems onClick={() => this.onChangeActiveMenu(false)} />   
                <div 
                    {...classname({ [styles.humburgerActive]: activeMenu }, styles.humburger)}
                    onClick={() => this.onChangeActiveMenu()}
                >
                    <i 
                        {...classname({
                            'fa-bars': !activeMenu,
                            'fa-times': activeMenu
                        }, 'fa')} 
                        aria-hidden="true"></i>
                </div>
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