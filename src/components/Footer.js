import React from "react";
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";



export default function Footer() {
    return (
        <div className="shadow-lg font-semibold text-lg text-center mt-16 pb-8">
            This is the Footer
            <div className="flex text-2xl w-full justify-center mt-2">
            <FaFacebookF className="text-black mx-2"/>
            <FaTwitter className="text-black mx-2"/>
            <FaInstagramSquare className="text-black mx-2"/>
            </div>
        </div>
    )
}