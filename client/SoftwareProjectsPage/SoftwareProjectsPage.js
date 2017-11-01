import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import SoftwareImg from './software.jpg'
import Footer from '../components/Footer/Footer'

const SoftwareProjectsPage = () => (
    <div id="software-projects">
        <NavBar projectsActive="active"/>
        <Banner image={"." + SoftwareImg} title="Software Projects" description="Application Development \ Databases \ Web Development"/>
        <h1 className="container">Software Projects Page</h1>
        <Footer/>
    </div>
)

ReactDOM.render(<SoftwareProjectsPage/>, document.getElementById('root'));
