import React, { Component } from 'react';
import IndexScreen from 'Screens/IndexScreen.jsx';
import AboutScreen from 'Screens/AboutScreen.jsx';
import ContactsScreen from 'Screens/ContactsScreen.jsx';
import ItemsScreen from 'Screens/ItemsScreen.jsx';
import AdvantageScreen from 'Screens/AdvantageScreen.jsx';
import RequestScreen from 'Screens/RequestScreen.jsx';
import { toastr } from 'react-redux-toastr';
import { send } from 'api';
import scrollTo from 'helpers/scrollTo';

const validate = (key, value) => {

    if (key === 'name'){
        if (value.length < 2) {
            return 'Значение реквизита не должно быть пустым';
        }
    }
    else if (key === 'phone') {
        if (value.length < 2) {
            return 'Значение реквизита не должно быть пустым';
        }

        if (value.indexOf('_') >= 0) {
            return 'Заполните правильно номер телефона';
        }
    }
    
    return false;
};

export default class Main extends Component {

    constructor() {
        super();

        this.state = {
            name: {
                value: '',
                error: false
            },
            phone: {
                value: '',
                error: false
            },
            description: {
                value: '',
                error: false
            },
            message: {isFetching: false, send: false }
        };

        this.clickSendButton = false;
    }

    onSendRequest = () => {
        this.clickSendButton = true;

        const nameErrors = validate('name', this.state.name.value);
        const phoneErrors = validate('phone', this.state.phone.value);

        this.setState({
            name: {...this.state.name, error: nameErrors},
            phone: {...this.state.name, error: phoneErrors}
        });
        
        if (!nameErrors && !phoneErrors) {
            this.setState({
                message: { isFetching: true, send: false}
            });
            send({
                name: this.state.name.value,
                phone: this.state.phone.value,
                description: this.state.description.value
            })
                .then(() => {
                    toastr.success('Заявка отправлена', 
                        'Ваша заявка отправлена нашим менеджерам.');
                    this.setState({
                        message: { isFetching: false, send: true}
                    });
                });
        }

        
    }

    onChangeKey = (key, value) => {

        this.setState({[key]: {
            value, error: this.clickSendButton ? validate(key, value) : false
        }});
    }

    componentDidMount() {
        if (location.hash) {
            scrollTo(location.hash);
        }
    }

    render() {
        return (
            <div>
                <IndexScreen />
                <AboutScreen />
                <AdvantageScreen />
                <ItemsScreen />
                <RequestScreen 
                    {...this.state}
                    onChangeKey={this.onChangeKey}
                    onSendRequest={this.onSendRequest}
                />
                <ContactsScreen />
            </div>
        );
    }
}