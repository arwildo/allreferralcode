import React from 'react';

import Logo from './assets/img/logo.svg';

export default function(props) {
    return (
        <nav className="bg-gray-800 shadow-lg border-gray-900 shadow-lg">
            <div className="md:flex items-center justify-between py-5 px-8 md:px-12">
                <div className="flex justify-between items-center">
                   <div className="text-2xl font-bold text-gray-400 md:text-3xl">
                        <img className="mx-auto w-10" src={Logo} alt="All Referral Code" />
                   </div>
                    <div className="md:hidden">
                        <button type="button" className="block text-gray-800 hover:text-gray-900 focus:text-gray-900 focus:outline-none">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
                                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row hidden md:block -mx-2">
                    <a href="#" className="text-gray-400 rounded hover:bg-gray-500 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Home</a>
                    <a href="#" className="text-gray-400 rounded hover:bg-gray-500 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">About</a>
                    <a href="#" className="text-gray-400 rounded hover:bg-gray-500 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Contact</a>
                </div>
            </div>
        </nav>
    );
}
