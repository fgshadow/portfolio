import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar/NavBar'

const HomePage = () => (
    <div id="home-page">
        <NavBar homeActive="active"/>
        <h1 className="container">Home Page</h1>
    </div>
)

ReactDOM.render(<HomePage/>, document.getElementById('root'));
