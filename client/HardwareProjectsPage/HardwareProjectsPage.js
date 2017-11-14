import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../components/NavBar/NavBar'
import HardwareImg from './embedded-systems-wallpaper.jpg'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Logo from '../src/img/name.png'

const HardwareProjectsPage = () => (
    <div id="hardware-projects-page">
        <NavBar logo={"../" + Logo} projectsActive="active"/>
        <Banner image={"." + HardwareImg} title="Hardware Projects" description="Embedded Systems \ Processor Design \ System-on-chip"/>
        <Footer/>
    </div>
)

ReactDOM.render(<HardwareProjectsPage/>, document.getElementById('root'));
