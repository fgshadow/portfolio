import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

const ProjectsPage = () => (
    <div id="projects-page">
        <NavBar projectsActive="active"/>
        <h1 className="container">Projects Page</h1>
        <a href="/projects/hardware">Hardware Projects</a>
        <a href="/projects/software">Software Projects</a>
        <Footer/>
    </div>
)

ReactDOM.render(<ProjectsPage/>, document.getElementById('root'));
