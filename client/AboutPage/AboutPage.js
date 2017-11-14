import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../components/NavBar/NavBar'
import ProfileBanner from '../components/ProfileBanner/ProfileBanner'
import Footer from '../components/Footer/Footer'
import ProfileImg from './self.jpg'
import aboutData from './about.json'
import Logo from '../src/img/name.png'


const AboutPage = () => (
    <div id="about-page">
        <NavBar logo={Logo} aboutActive="active"/>
        <ProfileBanner image={ProfileImg}
         title={<div>A little <span className="text-info">bit</span> about myself...</div>}
         description={<div>I am a problem solver.<br/>I enjoy learning.<br/>I look for the best in others.<br/>I am constantly seeking to improve.</div>}/>
        <Footer/>
    </div>
)

ReactDOM.render(<AboutPage/>, document.getElementById('root'));
