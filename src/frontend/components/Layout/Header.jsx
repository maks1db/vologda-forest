import React from 'react';
import styles from './scss/header.scss';
import NavLi from './NavLi.jsx';
import classname from 'helpers/classname.js';
import ToTop from 'react-scroll-top';
import scrollTo from 'helpers/scrollTo';

const NavItems = ( { onClick }) => {
    return(
        <ul>
            <NavLi title="Главная" onClick={() => {
                scrollTo('#main');
                onClick();
            }}/>
            <NavLi title="О нас" onClick={() => {
                scrollTo('#about');
                onClick();
            }}/>
            <NavLi title="Продукция" onClick={() => {
                scrollTo('#items');
                onClick();
            }} />
            <NavLi title="Контакты" onClick={() => {
                scrollTo('#contacts');
                onClick();
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