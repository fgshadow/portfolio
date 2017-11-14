import React from 'react'
import './NavBar.css'

const NavBar = (props) => (
    <nav id="navigation-bar" className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
            <div className="navbar-brand" style={{backgroundImage: 'url(' + props.logo + ')'}}></div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarNav" className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <a className={"nav-item nav-link " + props.homeActive}  href="/">Home</a>
                    <a className={"nav-item nav-link " + props.aboutActive} href="/about">About</a>

                    <div className="nav-item dropdown ">
                        <a className={"nav-link dropdown-toggle " + props.projectsActive} href="/projects" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Projects
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/projects/hardware">Hardware Projects</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/projects/software">Software Projects</a>
                        </div>

                    </div>

                    <a className={"nav-item nav-link " + props.contactActive} href="/contact">Contact</a>
                </div>
            </div>
        </div>
    </nav>
)

export default NavBar;
