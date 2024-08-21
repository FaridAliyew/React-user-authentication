import React, { useState } from 'react';
import LoginImg from '../imgs/Login-bg.png';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);

            if (formData.email === userData.email && formData.password === userData.password) {
                alert('Login successful!');
                navigate('/dashboard'); // İstədiyiniz səhifəyə yönləndirin
            } else {
                alert('Invalid email or password.');
            }
        } else {
            alert('No user data found.');
        }
    };

    return (
        <div className='login-container'>
            <div>
                <div className='container'>
                    <div className='row px-5 py-1'>
                        <div className='col-12 col-md-6 forms ms-5'>
                            <h1 className='p-4 ms-4 mb-4'>Login</h1>

                            <form className='p-5' onSubmit={handleSubmit}>
                                <label>Email</label> <br />
                                <input
                                    type="email"
                                    placeholder='username@gmail.com'
                                    name='email'
                                    className='mt-2'
                                    value={formData.email}
                                    onChange={handleChange}
                                /> <br />

                                <label className='mt-2'>Password</label> <br />
                                <input
                                    type="password"
                                    placeholder='Password'
                                    name='password'
                                    className='mt-2'
                                    value={formData.password}
                                    onChange={handleChange}
                                />

                                <button type='submit' className='submit'>Sign in</button>
                            </form>

                            <p className='p-5 forget-password'>Forget Password?</p>

                            <p className='p-5 continue'>Or Continue With</p>

                            {/* --------- Icons ------- */}
                            <div className='icons'>
                                <span className='icon'><FcGoogle className='google' /></span>
                                <span className='icon'><FaGithub className='gitHub' /></span>
                                <span className='icon facebook-icon'><FaFacebook className='facebook' /></span>
                            </div>

                            <p className='goToRegister'>Don’t have an account yet? <Link to="/register" className='goRegister'>Register for free</Link></p>
                        </div>

                        {/* ----- Img ---- */}
                        <div className='d-none d-xl-block col-md-6 ms-5'>
                            <img src={LoginImg} className='img-fluid mt-5' alt="Login background" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;
