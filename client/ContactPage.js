import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar/NavBar'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import Footer from './components/Footer/Footer'
import Logo from './src/img/name.png'

const ContactPage = () => (
    <div id="contact-page">
        <NavBar logo={Logo} contactActive="active"/>
        <RegistrationForm/>
        <Footer/>
    </div>
)

ReactDOM.render(<ContactPage/>, document.getElementById('root'));
