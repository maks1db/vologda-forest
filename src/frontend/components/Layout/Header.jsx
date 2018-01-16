import React from 'react';
import NavLi from './NavLi.jsx';
import classname from 'helpers/classname.js';
import ToTop from 'react-scroll-top';
import scrollTo from 'helpers/scrollTo';
import 'helpers/serverSideObjects';

if (process.env.BROWSER) {
    require('./scss/header.scss');
}

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

        
        if (background && window.pageYOffset < 10) {
            this.setState({background: false});
        }

        if (!background && window.pageYOffset > 10) {
            this.setState({background: true});
        }
        
    }

    componentWillMount() {
        
        window.addEventListener('scroll', this.onScroll);
        this.setState({
            background: true
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onChangeActiveMenu = (value) => {
        const { activeMenu } = this.state;
        this.setState({ activeMenu: value !== undefined ? value : !activeMenu});
    }

    render() {

        const { activeMenu, background } = this.state;

        console.log(this.state);
        return (<div {...classname({background: background}, 'header')}>
            <div className='title'>Вологодский лес</div> 
            <nav {...classname({active_menu: activeMenu}, 'navigation')}>
                <NavItems onClick={() => this.onChangeActiveMenu(false)} />   
                <div 
                    {...classname({ humburgerActive: activeMenu }, 'humburger')}
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
            <div className="to-top" >
                <ToTop 
                    hideAt={100} 
                    position="bottom" 
                />
            </div>
        </div>);
    }
}