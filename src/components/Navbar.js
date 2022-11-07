import React from "react";
import { NavLink } from "react-router-dom";
import { Transition } from '@headlessui/react';
import { HiUserCircle } from "react-icons/hi";
// import { HiUserCircleCircle } from "react-icons/bi";
import { Squash as Hamburger } from 'hamburger-react';
import { HiOutlineSearch } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";


export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  function handleIsOpen() {
    setIsOpen(prevState => !prevState)
  }
    return (
        <>
        <Transition show={isOpen} enter="transition transition-opacity ease-in duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition transition-opacity ease-out duration-300" leaveFrom="opacity-100" leaveTo="opacity-0"><div className={`flex fixed top-16 h-2/5 bg-white lg:hidden w-full shadow-xl z-10 ${isOpen ? "left-0" : "left-[-500px]"}`}>
        <div className="fixed pt-1 flex flex-col text-2xl  justify-center w-full font-medium pl-4 mb-10">
        <NavLink to="/" className="my-3" 
        onClick={handleIsOpen}
        >
            Store
          </NavLink>
          <NavLink to="construction" className="my-3" 
          onClick={handleIsOpen}
          >
            Construction
          </NavLink>
          <NavLink to="home-improvement" className="my-3" 
          onClick={handleIsOpen}
          >
            Home Improvement
          </NavLink>
          <NavLink to="login" className="my-3 flex items-center" 
          onClick={handleIsOpen}
          >
            < HiUserCircle className="mr-2 text-4xl mt-1 text-gray-800"/>
            Login
          </NavLink>
        </div>
      </div>
      </Transition>
        <div className="h-16 flex items-center justify-center px-2 shadow-lg">       
            <div className="mr-auto top-3 z-10 left-3">
        <Hamburger toggled={isOpen} toggle={handleIsOpen} className=""/>
            </div>
            <div className="mr-auto">
            <p className="font-bold text-2xl font-Playfair">Dukamoja</p>
            </div>
            <div className="flex">
            <HiOutlineSearch className="text-2xl"/>
            <FiShoppingCart className="text-2xl ml-2"/>
            </div>
        </div>
        </>
    )
}