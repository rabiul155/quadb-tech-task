import React, { useContext } from 'react';
import { ShowsContext } from '../../context/ContextProvider';
import { Link } from 'react-router-dom';

const DisplayShow = ({ show }) => {

    const { setShow } = useContext(ShowsContext)

    return (
        <div >
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-2 ">
                        <img src={show?.image?.original} className="img-fluid  rounded-start" alt="..." />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h4 className="card-title">Name : {show?.name}</h4>
                            <h6 className="card-title">Language : {show?.language}</h6>
                            <h6 className="card-title">Type : {show?.type}</h6>
                            <h6 className="card-title">Genres : {show?.genres[0]}</h6>
                            <h6 className="card-title">Rating : {show?.rating?.average}</h6>
                            <h6 className="card-title">Runtime : {show?.runtime}min</h6>
                            <h6 className="card-title">Stauts : {show?.status}</h6>

                            <Link to={`/show/${show?.id}`}><button onClick={() => setShow(show)} type="button" className="btn btn-outline-info">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DisplayShow;