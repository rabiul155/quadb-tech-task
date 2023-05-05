import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';

const Show = () => {

    const [show, setShow] = useState([]);
    useEffect(() => {
        const show = JSON.parse(localStorage.getItem('show'));
        if (show) {
            setShow(show);
        }
    }, []);


    const summary = show?.summary
    const newSummary = summary?.replace(/(<([^>]+)>)/ig, '')

    return (

        <div>
            {
                show ?
                    <div className=' w-75 mx-auto mt-5'>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4 ">
                                    <img src={show?.image?.original} className="img-fluid  rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">Name : {show?.name}</h4>
                                        <h6 className="card-title">Language : {show?.language}</h6>
                                        <h6 className="card-title">Type : {show?.type}</h6>
                                        <h6 className="card-title">Rating : {show?.rating?.average}</h6>
                                        <h6 className="card-title">Runtime : {show?.runtime}min</h6>
                                        <h6 className="card-title">Stauts : {show?.status}</h6>
                                        <p className="">Summary : {newSummary}</p>
                                        <div className=' d-flex gap-3'>
                                            <Link to={`/ticket/${show?.id}`}><button type="button" className="btn btn-outline-info">Ticket Booking</button></Link>
                                            <a target='blank' href={show?.officialSite
                                            }><button type="button" className="btn btn-outline-primary">Go to official Site</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :

                    <Loading></Loading>
            }
        </div>
    );
};

export default Show;