/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='my-10'>
            <div id="banner-bg" className="h-[450px] relative">

            </div>
            <div>
                <h2 className='absolute md:bottom-64 font-bold text-4xl md:left-96'>TRELLO MANAGE YOUR TIME AND <br /> BE PRODUCTIVE</h2>
                <Link to="/dashboard"><button className='btn btn-primary absolute md:bottom-44 md:left-96'>Let's Explore</button></Link>
            </div>
        </div>
    );
};

export default Banner;