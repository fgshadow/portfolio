import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar/NavBar'
import HomeBanner from './components/HomeBanner/HomeBanner'

const HomePage = () => (
    <div id="home-page">
        <NavBar homeActive="active"/>
        <HomeBanner/>
    </div>
)

ReactDOM.render(<HomePage/>, document.getElementById('root'));
