import React, { useState } from 'react';
import './style.css';

const ContactMe = () => {
    const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
        <div className="container d-flex justify-content-center  vh-100">
            <div className="w-50">
                <h1 className="contact-header text-center">Contact Me</h1>
                <div className="row d-flex justify-content-evenly  align-items-center contact-info ">
                    <div className='col-md-6'>
                        <h3>Reach me out</h3>
                        <address>
                            <br />
                            Phone: <a href="tel:(331)333-9582">(331)333-9582</a>
                            <br />
                            Email:{" "}
                            <a href="mailto:/ahmadus10@icloud.com">
                            ahmadus10@icloud.com
                            </a>
                        </address>
                    </div>
                    <form onSubmit={handleSubmit} className="p-4 bg-light rounded-3 col-md-6">
                        <div className="form-floating form-floating mb-3">
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                id="name"
                                placeholder="Name"
                                name="name"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating form-floating mb-3">
                            <input
                                type="email"
                                className="form-control form-control-sm"
                                id="email"
                                placeholder="Email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating form-floating mb-3">
                            <textarea
                                className="form-control form-control-sm"
                                id="message"
                                placeholder="Message"
                                name="message"
                                value={formValues.message}
                                onChange={handleChange}
                            />
                            <label htmlFor="message">Message</label>
                        </div>
                        <button type="submit" className="btn btn-dark">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
