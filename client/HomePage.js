import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar/NavBar'
import HomeBanner from './components/HomeBanner/HomeBanner'
import Logo from './src/img/name.png'

const HomePage = () => (
    <div id="home-page">
        <NavBar logo={Logo} homeActive="active"/>
        <HomeBanner name="Felipe Galaviz" title="Computer Engineer"/>
    </div>
)

ReactDOM.render(<HomePage/>, document.getElementById('root'));
