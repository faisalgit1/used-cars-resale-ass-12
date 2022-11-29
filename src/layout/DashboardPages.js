import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const DashboardPages = () => {
    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer z-10  drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-gray-200 relative flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className=" bg-teal-500 rounded-full text-white p-2   absolute top-5 left-5 drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>


                    </label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu font-semibold z-10  md:bg-transparent bg-gray-300  p-4 w-80  text-base-content">

                        {/* Seller */}
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addcar'>Add Car</Link></li>
                                <li><Link to='/dashboard/mypost'> My Post</Link></li>
                                <li><Link to='/dashboard/mybuyer'> My Buyer</Link></li>
                            </>
                        }
                        {/* Buyer */}
                        {
                            isBuyer &&
                            <li><Link to='/dashboard/mybooking'>My Bookings</Link></li>
                        }


                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardPages;