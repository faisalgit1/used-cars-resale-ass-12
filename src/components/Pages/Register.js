import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { signUp, googleSignIn, setuserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    // REACT Form
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleSignup = data => {
        console.log(data)

        signUp(data.email, data.password)
            .then(result => {

                const profile = {
                    displayName: data.name
                }

                setuserProfile(profile)
                    .then(() => {

                        saveUser(data.name, data.email, data.accountType);
                    })
                    .catch(err => console.log(err));

                console.log(result)

            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    console.log(handleSubmit);
    //db user save
    const saveUser = (name, email, role) => {
        const user = { name, email, role }
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('Token', data.data)
                setTimeout(() => {
                    navigate(from, { replace: true })
                    toast.success('SignUp SuccessFull')

                }, 300);

            })
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('Google Login SuccessFull')
                const role = 'Buyer'
                saveUser(user.displayName, user.email, role);

            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };


    return (
        <div className='mt-10 mb-10 '>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto w-[96%] md:w-1/3 mx-auto">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">Please Register</h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative mb-6">
                                            <label for="username" className="block font-bold dark:text-gray-400">Name</label>
                                            <input type="text"
                                                {...register('name', { required: 'Name is Required' })} className="peer  p-2 w-full border border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Your Name" />
                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="block font-bold dark:text-gray-400">Account Type ?</span>
                                            </label>
                                            <select {...register('accountType', { required: 'User is Required' })} className="peer  p-2 w-full border border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded">
                                                <option value='Buyer'>Buyer</option>
                                                <option>Seller</option>

                                            </select>


                                        </div>


                                        <div className="relative mb-6">
                                            <label for="username" className="block font-bold dark:text-gray-400">Email</label>
                                            <input type="email"
                                                {...register('email', { required: 'Email is required' })} className="peer p-2 w-full border border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Email address" />
                                        </div>
                                        <div className="relative">
                                            <label for="username" className="block font-bold dark:text-gray-400">Password</label>
                                            <input type="password"
                                                {...register('password', { required: 'Password is Required', minLength: { value: 6, message: "Password Must be 6 characters" }, pattern: { value: /[1-9]/, message: 'More Stornger' } })} className="peer p-2 w-full border border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Password" />
                                        </div>
                                        <div className="relative">
                                            <button className="bg-green-400 text-white rounded-md py-2 w-full my-4">Register</button>
                                        </div>
                                        <div>
                                            <p className="text-red-500">{error}</p>
                                        </div>
                                        <p className='text-center text-base font-semibold'>
                                            <small>
                                                Already Have an Account?
                                                <Link to="/login" className='text-green-500 ml-1'>Click Here to Login</Link>
                                            </small>
                                        </p>
                                        <p className='horizontal-line text-center mt-2 text-base font-semibold'>Or</p>
                                        <div className="relative">
                                            <button
                                                onClick={handleGoogleLogin}
                                                className="font-semibold text-base rounded-md py-2 w-full border border-gray-300 flex justify-center items-center">
                                                <FcGoogle className='mr-2 text-2xl' />
                                                Continue With Google
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;