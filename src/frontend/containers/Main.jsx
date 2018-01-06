import React, { Component } from 'react';
import IndexScreen from 'Screens/IndexScreen.jsx';
import AboutScreen from 'Screens/AboutScreen.jsx';
import ContactsScreen from 'Screens/ContactsScreen.jsx';
import ItemsScreen from 'Screens/ItemsScreen.jsx';
import AdvantageScreen from 'Screens/AdvantageScreen.jsx';
import RequestScreen from 'Screens/RequestScreen.jsx';

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
            }
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
            //send
        }
    }

    onChangeKey = (key, value) => {

        this.setState({[key]: {
            value, error: this.clickSendButton ? validate(key, value) : false
        }});
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