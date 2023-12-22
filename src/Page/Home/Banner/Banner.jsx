/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='my-10'>
            <div id="banner-bg" className="h-[450px] relative">

            </div>
            <div>
                <Link to="/dashboard"><button className='btn btn-primary absolute bottom-36 left-96'>Let's Explore</button></Link>
            </div>
        </div>
    );
};

export default Banner;