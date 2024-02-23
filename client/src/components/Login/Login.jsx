import React, { useState } from 'react';
import { useAuth } from '../context/UserAuthContext';
import './Login.css';

const Login = () => {
    const { error, login } = useAuth();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [err, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = user;

        if (email.trim() === '' || password.trim() === '') {
            setError('Please fill in all fields');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        // Call login function from your authentication context
        try {
            await login(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    const validateEmail = (email) => {
        // Regular expression for validating email
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            {err && <p className="error">{err}</p>}
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
