import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc"
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {


    return (
        <div className=' mt-10 mb-10  '>
            <form>
                <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto w-[96%] md:w-1/3 mx-auto">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">Please Login</h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative mb-6">
                                            <label for="username" className="block font-bold dark:text-gray-400">Email</label>
                                            <input id="email" name="email" type="email" className="peer p-2 w-full border border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Email address" required />
                                        </div>
                                        <div className="relative">
                                            <label for="username" className="block font-bold dark:text-gray-400">Password</label>
                                            <input id="password" name="password" type="password" className="peer p-2 w-full border border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Password" required />
                                        </div>
                                        <div className="relative">
                                            <button className="bg-green-400 text-white rounded-md p-2 w-full my-4">Login</button>
                                        </div>
                                        <div className="flex justify-end text-xs dark:text-gray-400">
                                            <Link  >Forgot Password?</Link>
                                        </div>
                                        <div>
                                            <p className="text-red-500"></p>
                                        </div>
                                        <p className='text-center text-base font-semibold'>
                                            <small>
                                                Don't Have an Account?
                                                <Link to="/register" className='text-green-500 ml-1'>Click Here to Register</Link>
                                            </small>
                                        </p>
                                        <p className='horizontal-line mt-2 text-center text-base font-semibold'>Or</p>
                                        <div className="relative">
                                            <button

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

export default Login;