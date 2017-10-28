import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

const ContactPage = () => (
    <div id="contact-page">
        <NavBar contactActive="active"/>
        <h1 className="container">Contact Page</h1>
        <Footer/>
    </div>
)

ReactDOM.render(<ContactPage/>, document.getElementById('root'));
