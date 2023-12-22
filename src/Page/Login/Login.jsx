import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../../assets/login_image.avif"
import Swal from "sweetalert2";

const Login = () => {
    const [error, setError] = useState('')
    // const [success,setSuccess] = useState('')
    const { singIn, googleSingIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const handelLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        setError('')
        // setSuccess('')

        // console.log(email,password)
        singIn(email, password)
            .then(result => {
                console.log(result.user)
                // setSuccess('successfully login')
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
            .catch(error => {
                console.error(error.message)
                setError('Email password do not match')

            })




    }
    const handelGoogleSignIn = (e) => {
        e.preventDefault()
        googleSingIn()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });

            })
            .catch(error => {
                console.error(error.message)


            })

    }
    // const handelLoginBtn = () => {
    //     toast('login successfully')

    // }
    return (
        <div>
            <h3 className='text-center text-4xl font-semibold mt-8'>Please Login!!!</h3>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1' data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img src={loginImage} alt="" />
                </div>
                <div className='flex-1' data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500">
                    <div className=" mt-3">

                        <div className="hero-content">

                            <div className="static card flex-shrink-0 w-full max-w-sm shadow-2xl">
                                <div className='flex items-center justify-center mt-5'>
                                    <div className='text-2xl mt-3'>
                                        <button onClick={handelGoogleSignIn} className='btn px-14 rounded-lg btn-outline'><FcGoogle className='text-3xl'></FcGoogle>
                                            Continue With Google
                                        </button>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-2xl text-center mt-4 mb-3'>or</p>
                                    <p className='border-b-2'></p>
                                </div>
                                <form onSubmit={handelLogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                        {
                                            error && <p className="text-xl text-red-700">{error}</p>
                                        }

                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn">Login</button>
                                    </div>
                                </form>


                                <p className="text-center mb-10">Do not Have An Account ? <Link className="text-blue-500 underline" to="/register" >Register</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;