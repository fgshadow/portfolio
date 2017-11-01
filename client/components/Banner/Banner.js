import React from 'react'
import './Banner.css'

const Banner = (props) => (
    <div id="banner" className="d-flex justify-content-center flex-column align-items-center" style={{backgroundImage: 'url(' + props.image + ')'}}>
        <div id="banner-text" className="d-inline-block text-center">
            <div id="banner-title">
                <h1 className="display-3">{props.title}</h1>
            </div>
            <div id="banner-description">
                {props.description}
            </div>
        </div>
    </div>
)

export default Banner;
