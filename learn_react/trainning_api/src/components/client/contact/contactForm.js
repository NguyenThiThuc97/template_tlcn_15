import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <div className="form-area">  
                        <form role="form" className = "padding-form">
                            <br style={{clear: 'both'}} />
                            <h3 style={{marginBottom: '25px', textAlign: 'center'}}> Leave a message </h3>
                            <div className="form-group pdt-45">
                                <label>Your Name</label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
                            </div>
                            <div className="form-group pdt-20">
                                <label>Email Address</label>
                                <input type="text" className="form-control" id="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="form-group pdt-20">
                                <label>Phone No</label>
                                <input type="text" className="form-control" id="mobile" name="mobile" placeholder="Mobile Number" required />
                            </div>
                            <div className="form-group pdt-20">
                                <label>Subject</label>
                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group pdt-20">
                                <label>Message</label>
                                <textarea className="form-control" type="textarea" id="message" placeholder="Message" maxLength={140} rows={7} defaultValue={""} />
                                <span className="help-block"><p id="characterLeft" className="help-block ">You have reached the limit</p></span>                    
                            </div>
                            <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Submit Form</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;