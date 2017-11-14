import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import SoftwareImg from './software.jpg'
import Footer from '../components/Footer/Footer'
import Logo from '../src/img/name.png'

const SoftwareProjectsPage = () => (
    <div id="software-projects">
        <NavBar logo={"../" + Logo} projectsActive="active"/>
        <Banner image={"." + SoftwareImg} title="Software Projects" description="Application Development \ Databases \ Web Development"/>
        <Footer/>
    </div>
)

ReactDOM.render(<SoftwareProjectsPage/>, document.getElementById('root'));
