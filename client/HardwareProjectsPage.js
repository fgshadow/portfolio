import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

const HardwareProjectsPage = () => (
    <div id="hardware-projects-page">
        <NavBar projectsActive="active"/>
        <h1 className="container">Hardware Projects Page</h1>
        <Footer/>
    </div>
)

ReactDOM.render(<HardwareProjectsPage/>, document.getElementById('root'));
