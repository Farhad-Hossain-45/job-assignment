import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import registerImage from '../../assets/login_image.avif'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {

    const { createUser, } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const imageFile = { image: data.photo[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }

        })
        console.log(res.data.data.display_url)

        const email = data.email
        const password = data.password
        // const photo = data.PhotoUrl
        // const name = data.name

        createUser(email, password)
            .then(result => {
                const name = data.name
                const photo = res.data.data.display_url

                console.log(result.user)

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {

                    })
                    .catch(error => {
                        console.error(error)
                    })
                    .then(() => {

                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            image: photo,
                            // reward: "bronze"

                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res.user)
                                if (res.data.insertedId) {

                                    Swal.fire("Successfully signed up ");
                                    navigate("/")
                                }

                            })

                    })

            })
    }


    return (
        <div className="md:flex justify-between">
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img src={registerImage} alt="" />
            </div>
            <div>
                <div className="" data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500">
                    <div id="background">
                        <div className='border-2  w-[350px] h-[560px] md:h-[680px] mb-6 mt-6 md:w-[500px] p-5
         md:p-10 bg-white bg-opacity-50 hover:border-blue-500 hover:shadow-2xl  rounded-md' >
                            <h2 className='text-5xl font-bold text-blue-600'>Register here</h2>

                            <form onSubmit={handleSubmit(onSubmit)} className=' w-40 h-80 relative'>
                                <h3 className='text-white text-lg font-medium'>Email</h3>
                                <input className='pl-2  rounded-md py-2 w-[300px] border md:w-[400px] text-lg'
                                    {...register("email", { required: true })} type="email" placeholder='Email' id="" />
                                {errors.email && <span className="mt-2 text-red-600">Email is required </span>}


                                <h3 className='text-white text-lg  font-medium'>Password</h3>
                                <input className='pl-2 border rounded-md py-2 w-[300px] md:w-[400px]  text-lg '
                                    {...register("password", { required: true })} type="password" placeholder='Password' id="" />
                                {errors.password && <span className="mt-2 text-red-600 ">password is required </span>}

                                <h3 className='text-white text-lg  font-medium'>Profile Picture</h3>
                                <input className='pl-2 border rounded-md py-2 w-[300px] md:w-[400px]   text-lg '
                                    {...register("photo", { required: true })} type="file" placeholder='Password' id="" />
                                {errors.photo && <span className="mt-2 text-red-600 ">picture is required </span>}


                                <h3 className='text-white text-lg  font-medium'>Full Name</h3>
                                <input className='pl-2 rounded-md py-2 w-[300px] border md:w-[400px] text-lg'
                                    {...register("name", { required: true })} type="text" placeholder='Full Name' id="" />
                                {errors.name && <span className="mt-2 text-red-600 w-full">Name is required </span>}

                                <button className="btn w-[300px] md:w-[400px] bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Register</button>
                                <p className=' mt-2 mb-6 w-[300px] '>Already have an account? <Link
                                    className='font-semibold text-blue-500 underline' to="/login">Login</Link></p>
                                {/* <GoogleLogin></GoogleLogin> */}
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;