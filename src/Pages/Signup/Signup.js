import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import useAuthToken from '../../hooks/useAuthToken';

const Signup = () => {

    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [signupError, setSignupError] = useState('');
    
    const [signInUserEmail, setSignInUserEmail] = useState('')
    const [token] = useAuthToken(signInUserEmail);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, { replace: true });
    }

    // Insert User to Database
    const saveUserToDB = (user) => {

        console.log(user);
        const userData = {
            name: user.name,
            email: user.email,
            role: user.role
        }

        fetch(`https://ak-hands-fashion-shop-server.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                setSignInUserEmail(user.email);
            })
    }

    // Create User

    const handleSignup = (data) => {

        setSignupError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success(`User has been created successfully.`);
                reset();

                const userData = {
                    displayName: data.name
                }
                updateUser(userData)
                    .then(() => {
                        saveUserToDB(data);
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error.message);
                setSignupError(error.message);
            })
    }

    // Google Sign In

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const googleUser = {
                    name: user.displayName,
                    email: user.email
                }
                
                saveUserToDB({ ...googleUser, role: 'Buyer' });
                setSignupError('');
            })
            .catch(error => {
                setSignupError(error.message);
            });
    }

    return (
        <div className='h-[750px] flex justify-center items-center'>
            <div className='w-96 p-6'>
                <h2 className='text-2xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type='text'
                            {...register('name',
                                { required: 'Name is required.' })}
                            className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' {...register('email', { required: true })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password'
                            {...register('password',
                                {
                                    required: 'Password is required',
                                    pattern: { value: /(?=.*[A-Z])(?=.*[0-9])/, message: 'Password must be uppercase and number' },
                                    minLength: { value: 5, message: 'Password must be 5 characters long.' }
                                })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                        <select {...register('role')} className="select select-bordered w-full">
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                    </div>
                    <div className='mt-6'>
                        <input className='btn btn-accent w-full form-control text-white' value='Sign Up' type="submit" />
                    </div>
                    <div>
                        {signupError && <p className='text-red-600'>{signupError}</p>}
                    </div>
                </form>
                <p className='p-4'>Already have an account plesae <strong><Link to='/login' className='text-primary text-center'>Login</Link></strong></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full"><span><FcGoogle className='text-2xl mx-1' /></span> Google</button>
            </div>
        </div>
    );
};

export default Signup;