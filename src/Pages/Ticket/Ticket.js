import React, { useEffect, useState } from 'react';

const Ticket = () => {

    const [show, setShow] = useState([]);
    useEffect(() => {
        const show = JSON.parse(localStorage.getItem('show'));
        if (show) {
            setShow(show);
        }
    }, []);

    console.log(show);

    return (
        <div className=' w-75 mx-auto mt-5'>


        </div>
    );
};

export default Ticket;