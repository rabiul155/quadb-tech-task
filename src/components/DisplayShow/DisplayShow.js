import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayShow.css'

const DisplayShow = ({ show }) => {

    const setShow = () => {
        localStorage.setItem('show', JSON.stringify(show))
    }

    return (
        <div className='show-card mx-auto'>
            <div className="card m-4" >
                <div className="row g-0">
                    <div className="col-md-3 ">
                        <img src={show?.image?.original} className="img-fluid  rounded-start" alt="..." />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h4 className="card-title">Name : {show?.name}</h4>
                            <h6 className="card-title">Language : {show?.language}</h6>
                            <h6 className="card-title">Type : {show?.type}</h6>
                            <h6 className="card-title">Genres : {show?.genres[0]}</h6>
                            <h6 className="card-title">Rating : {show?.rating?.average}</h6>
                            <h6 className="card-title">Runtime : {show?.runtime}min</h6>
                            <h6 className="card-title">Stauts : {show?.status}</h6>
                            <Link to={`/show/${show?.id}`}><button onClick={setShow} type="button" className="btn btn-outline-info">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DisplayShow;