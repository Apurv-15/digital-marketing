import React from 'react'
import { Link } from 'react-router-dom';
import "./Collab.css";

const Collab = () => {
    return (
        <section className='Contact'>
            <div className='topic'>Need a developer ?</div>
            <Link to="/contact">
                <div className='title'>Let's Collaborate &#8594;</div>
            </Link>
        </section>
    )
}

export default Collab;
