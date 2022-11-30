import React from "react";
import "./Contact.css";
function Contact() {
    return (
        <div className="p-4">
            <div className="py-12">
                <div className="container overflow-hidden">
                    <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-14 font-mono">
                        Contact Us
                    </h1>
                    <div className="grid lg:grid-cols-2 text-white max-w-full">
                        <div className="gradientBg p-4 w-full max-w-full sm:p-8 lg:p-20">
                            <h1 className="text-xl lg:text-5xl font-extrabold text-white">
                                100%<br></br> Satisfaction <br />
                                Guaranteed
                            </h1>
                            <p className="mt-4 text-sm break-words font-light max-w-full">
                                Now you can visit our all service.I can best services as you want.So all user take all steps for buy and sell this item.
                            </p>
                            <h2 className="text-xl font-bold lg:text-2xl mt-8 ">
                                What will be the next step?
                            </h2>
                            <p className="py-1 font-light mt-4 flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                                We'll prepare the proposal.
                            </p>
                            <p className="py-1 font-light flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                                we'll discuss it together.
                            </p>
                            <p className="py-1 font-light flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                                let's start the discussion.
                            </p>
                        </div>
                        <div className="bg-white p-4 max-w-full sm:p-8 lg:p-20 text-neutral">
                            <h2 className="text-xl lg:text-3xl text-neutral font-bold text-center">
                                Mail
                            </h2>
                            <div className="mt-8 max-w-52 w-48 sm:w-full sm:max-w-full mx-auto">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="Name" className="font-medium">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered bg-white"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 mt-4">
                                    <label htmlFor="Email" className="font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full bg-white"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 mt-4">
                                    <label htmlFor="Email" className="font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        className="textarea bg-white textarea-bordered"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mt-8 text-center w-48 sm:w-full mx-auto">
                                <button className="btn sm:btn-wide btn-primary w-48  text-white gap-2">
                                    Send{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
