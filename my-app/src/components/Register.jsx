import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        username: '',
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

        // Form sahələrinin hamısının dolu olduğunu yoxlayırıq
        if (!formData.username || !formData.email || !formData.password) {
            alert('Please fill in all fields.');
            return;
        }

        // Məlumatları localStorage-də saxlayırıq
        localStorage.setItem('user', JSON.stringify(formData));

        // Form məlumatlarını sıfırlayırıq
        setFormData({
            username: '',
            email: '',
            password: ''
        });

        alert('Registration successful!');

        // Login səhifəsinə yönləndiririk
        navigate('/');
    };

    return (
        <div className='register-container'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 forms'>
                        <h1 className='p-5 text-center'>Register</h1>

                        <form className='p-5' onSubmit={handleSubmit}>
                            <label>Username</label> <br />
                            <input
                                type="text"
                                placeholder='Username'
                                name='username'
                                className='mt-2'
                                value={formData.username}
                                onChange={handleChange}
                            /> <br />

                            <label className='mt-3'>Email</label> <br />
                            <input
                                type="email"
                                placeholder='username@gmail.com'
                                name='email'
                                className='mt-2'
                                value={formData.email}
                                onChange={handleChange}
                            /> <br />

                            <label className='mt-3'>Password</label> <br />
                            <input
                                type="password"
                                placeholder='Password'
                                name='password'
                                className='mt-2'
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <button type='submit' className='submit'>Register</button>
                        </form>

                        <p className='goToLogin text-center'>Already have an account? <Link to="/" className='goLogin'>Login here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
