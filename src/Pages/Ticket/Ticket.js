import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Ticket.css'

const Ticket = () => {

    const [show, setShow] = useState([]);
    useEffect(() => {
        const show = JSON.parse(localStorage.getItem('show'));
        if (show) {
            setShow(show);
        }
    }, []);
    const runtime = show?.averageRuntime

    const navigate = useNavigate()

    console.log(show);

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Ticket booking successfully')

        navigate('/')




    }

    return (

        <div className='ticket mx-auto mt-5'>
            <h2 className=' fw-bold text-center text-primary m-3'>Ticket Booking Form</h2>
            <form onSubmit={handleSubmit} className="row g-3 m-4">
                <div className="col-md-6">
                    <label className="form-label">Show Name</label>
                    <input disabled defaultValue={show?.name} type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label className="form-label"> Show Date</label>
                    <input disabled defaultValue={show?.schedule?.days[0]} type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Show Time</label>
                    <input disabled defaultValue={show?.schedule?.time} type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Duration</label>
                    <input disabled defaultValue={runtime} type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Your Name</label>
                    <input required type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label"> Your Email</label>
                    <input required type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Ticket Price</label>
                    <input disabled defaultValue='$5' type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Your Card Number</label>
                    <input required type="text" className="form-control" />
                </div>

                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="" />
                </div>

                <div className="col-12">
                    <button type='submit' className="btn btn-primary w-100">Confirm booking</button>
                </div>
            </form>


        </div>
    );
};

export default Ticket;