import React from "react";
import { Link } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import img24 from "../../Images/img24.png";
import construction from "../../Images/construction6.png";
import homeImprovement from "../../Images/homeImprovement8.png";
import offer from "../../Images/offer5.png";
import catalog from "../../Images/catalog2.png";

export default function Home() {
  // const [currentPhoto, setCurrentPhoto] = React.useState(img24)

  return (
    <div>
      <img src={img24} alt="hardware-store" className="pb-1" />
     <Link to="offers"><img src={offer} alt="offer-poster" />
     </Link> 
      <div className="mt-10">
        <div className="font-bold text-center font-Serifpro text-3xl">
          Categories
        </div>
        <div className="mb-8">
            <div className="">
                <Link to="construction" className="flex items-center">
          <img
            src={construction}
            alt="construction"
            className="px-14 pt-5 pb-7"
          />
          {/* <IoIosArrowForward className="text-4xl font-bold text-red-400"/> */}
                </Link>
            </div>
            <Link to="home-improvement">
          <img
            src={homeImprovement}
            alt="home-improvement"
            className="px-14 pt-5 pb-7"
          />
          {/* <IoIosArrowForward className="text-3xl font-bold"/> */}
            </Link>
          {/* <img src={construction} alt="roofing" className="px-14 pt-5 pb-7" /> */}
        </div>
        <div className="flex">
        <img src={catalog} alt="view-catalog" className="relative"/>
        < HiDownload className="absolute right-5 text-gray-400 mt-9 text-4xl"/>
        </div>
        <div className="mt-10">
        <div className="font-semibold text-3xl text-center mb-6">Lorem Ipsum</div>
        <div className="font-semibold text-lg pl-4 px-3 mb-8">
          Dukamoja Traders store can best be viewed as a modern take on the
          traditional hardware store. We are sized right for easy shopping, yet
          we house an extensive range of cutting-edge quality hardware products
          and accessories.
          <div className="mt-4">
          The establishment successfully operates today as a
          wholesale distributor of Hardware, Construction and Building Products
          as well as a retail outlet.
          </div>
        </div>
        <div className="font-semibold text-lg pl-4 px-3 mb-8">
          Brief info on services, terms, returns etc.,
        </div>
        </div>
      </div>
    </div>
  );
}
