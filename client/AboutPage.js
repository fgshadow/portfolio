import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

const AboutPage = () => (
    <div id="about-page">
        <NavBar aboutActive="active"/>
        <h1 className="container">About Page</h1>
        <Footer/>
    </div>
)

ReactDOM.render(<AboutPage/>, document.getElementById('root'));
