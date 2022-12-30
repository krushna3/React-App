import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: ''
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const formSubmit = (event) => {
        event.preventDefault();
        alert(`Hello My Name is ${data.fullName}, my Phone number is ${data.phone} and My Email is ${data.email} and this is i want to say ${data.message} `);
        setData({
            fullName: '',
            phone: '',
            email: '',
            message: ''
        })
    }
    return (
        <>
            <div className='text-center my-5'>
                <h1>Contact us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name='fullName'
                                    value={data.fullName}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Full Name" />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">Mobile NO.</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name='phone'
                                    value={data.phone}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Mobile No." />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    name='email'
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Email" />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlTextarea1"
                                    class="form-label">Message</label>
                                <textarea
                                    class="form-control"
                                    name='message'
                                    value={data.message}
                                    onChange={inputEvent}
                                    rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-info" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact