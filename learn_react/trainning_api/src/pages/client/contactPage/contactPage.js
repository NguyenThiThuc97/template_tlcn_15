import React, { Component } from 'react';
import Banner from './../../../components/client/contact/banner'
import ContactForm from './../../../components/client/contact/contactForm'

class ContactPage extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <ContactForm/>
            </div>
        );
    }
}

export default ContactPage;