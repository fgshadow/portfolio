import React from 'react'
import './ProfileBanner.css'

const ProfileBanner = (props) => (
    <div id="profile-banner">
        <div className="container row mx-auto py-4 py-md-5">
            <div id="profile-image-section" className="col-12 col-md-6 mb-3 mb-md-0">
                <div id="profile-image" className="mx-auto" style={{backgroundImage: 'url(' + props.image + ')'}}></div>
            </div>
            <div id="profile-description-block" className="col-12 col-md-6">
                <div id="description-container">
                    <div id="profile-title">
                        {props.title}
                    </div>
                    <div id="profile-description">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ProfileBanner;
