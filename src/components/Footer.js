import React from 'react';
import { FaGithub, FaGoogle, FaAws } from 'react-icons/fa';

 
const Footer = () => {
    return (
        <div className="bg-zinc-900 text-white drop-shadow-md">
            <div className="container py-4">
                <div className="flex items-center justify-center header">
                    <div className="logo mr-2">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Symbiota</span>
                            <img className="h-8" src="https://ik.imagekit.io/qysd8alv5/icon.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676943689807" alt="" />
                        </a>
                    </div>

                </div>
                <div className="links">
                    <ul className="flex items-center justify-center text-sm">
                        <li className="px-10"><a href="#" className="transition duration-500 hover:text-green-600">Earth 911 API</a></li>
                        <li className="px-10"><a href="#" className="transition duration-500 hover:text-green-600">Google Maps API</a></li>
                        <li className="px-10"><a href="#" className="transition duration-500 hover:text-green-600">AWS Amplify</a></li>
                    </ul>
                </div>
                <div className="socials-links py-6">
                    <ul className="flex items-center justify-center text-xl">
                        <li className="px-10"><a href="#" className="transition duration-500 hover:text-green-600"><FaGithub /></a></li>
                        <li className="px-10"><a href="#" className="transition duration-500 hover:text-green-600"><FaGoogle /></a></li>
                        <li className="px-10"><a href="#" className="transition duration-500 hover:text-green-600"><FaAws /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;