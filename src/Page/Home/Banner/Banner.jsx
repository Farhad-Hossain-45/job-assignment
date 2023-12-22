
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='my-10'>
            <div id="banner-bg" className="h-[450px] relative">

            </div>
            <div>
                <Link><button className='btn btn-primary absolute bottom-48 left-96'>Explore</button></Link>
            </div>
        </div>
    );
};

export default Banner;