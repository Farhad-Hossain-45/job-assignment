
import image_1 from '../../assets/image_1.jpg'
import image_2 from '../../assets/iamge_2.avif'
import image_3 from '../../assets/image_3.webp'
import image_4 from '../../assets/iamge_4.avif'
import image_5 from '../../assets/image_5.jpg'
import image_6 from '../../assets/image_6.jpg'

const Team = () => {
    return (
        <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-5">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image_1} className='h-[230px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Mr. Harvy</h2>
                    <p>Python Developer</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image_2} className='h-[230px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Mr. Maxwell</h2>
                    <p>C++ Developer</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image_3} className='h-[230px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Miss. Selina Begume</h2>
                    <p>React Developer</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image_4} className='h-[230px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Miss. Monika</h2>
                    <p>MERN Stack Developer</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image_5} className='h-[230px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Miss. Tisha</h2>
                    <p>BackEnd Developer</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image_6} className='h-[230px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Mr. Bravo</h2>
                    <p>Frontend Developer</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Team;