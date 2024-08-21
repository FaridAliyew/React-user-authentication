import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('user');
        navigate('/');
    }, [navigate]);

    return null; // Boş bir komponent, yönləndirmə işə düşdükdə heç nə göstərmir
};

export default LogOut;
