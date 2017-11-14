import React, {Component} from 'react'
import './RegistrationForm.css'


class RegistrationForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <form id="form" className="container">
            <div id="form-title">
                <h3 className="text-center py-2">Contact Me</h3>
            </div>
            <div className="form-group">
                <label htmlFor="first-name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email"/>
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Subject"/>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" placeholder="Message"/>
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-info mb-3">Submit</button>
            </div>
        </form>
        );
    }
}

export default RegistrationForm;
