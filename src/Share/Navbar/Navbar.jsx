import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Logo from "../../components/Logo/Logo";


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }
    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        {user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
        
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Logo></Logo>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    
                    {
                        user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} onClick={() => setToggle(!toggle)} />
                            </div>
                        </label>

                    }

                    {
                        toggle ? <div className='absolute top-16 z-[10]'>
                            {
                                user && <div className='shadow-xl bg-white w-52 h-20'>
                                    <h2 className='font-semibold text-xl text-center'>{user && user.displayName}</h2>
                                   <Link to='/login'>
                                        <h2 onClick={handleLogout} className='btn btn-ghost flex justify-center mt-2 '>LOGOUT</h2>
                                    </Link>

                                </div>
                            }

                        </div>

                            : ''
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;