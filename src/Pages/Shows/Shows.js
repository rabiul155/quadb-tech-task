import React, { useEffect, useState } from 'react';
import DisplayShow from '../../components/DisplayShow/DisplayShow';

const Shows = () => {

    const [shows, setShows] = useState([])

    useEffect(() => {
        fetch(' https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => {

                setShows(data)
            })
    }, [])

    return (

        <div className=' my-5'>
            <div >
                {
                    shows?.map(show => <DisplayShow
                        key={show.score}
                        show={show.show}
                    ></DisplayShow>)
                }
            </div>
        </div>

    );
};

export default Shows;