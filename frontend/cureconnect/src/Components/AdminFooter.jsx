import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../assets/logos/logo3/logo-no-background.svg";
import { useNavigate } from "react-router-dom";


function AdminFooter() {

  const navigate = useNavigate();

  const handleRouting = (key) => {
    if (key === "orders") {
      navigate("/admin/orders");
    } else if (key === "inventory") {
      navigate("/admin/inventory");
    } else if (key === "approval") {
      navigate("/admin/approval");
    } else {
      navigate("/");
    }
  };

  return (
    <footer className='w-full bg-secondaryColor p-3'>
        <div className="max-w-screen-lg px-4 sm:px-6 text-backgroundColor sm:grid lg:grid-cols-4 md:grid-cols-2 mx-auto ">
        <div className=" w-60 p-4">
            <img src={Logo} alt="" />
          </div>
            <div className="p-5"> 
                <div className="text-sm uppercase  font-bold">Services</div>
                <a className="my-3 font-semibold block hover:font-extrabold transition duration-150 ease-in-out hover:text-primaryColor hover:cursor-pointer" onClick={() => handleRouting("orders")}>Orders</a>
                <a className="my-3 font-semibold block hover:font-extrabold transition duration-150 ease-in-out hover:text-primaryColor hover:cursor-pointer" onClick={() => handleRouting("inventory")}>Inventory</a>
                <a className="my-3 font-semibold block hover:font-extrabold transition duration-150 ease-in-out hover:text-primaryColor hover:cursor-pointer" onClick={() => handleRouting("approval")}>Doctor's Approval</a> 
            </div>
            <div className="p-5">
                <div className="text-sm uppercase font-bold">Support</div>
                <a className="my-3 font-semibold block hover:font-extrabold transition duration-150 ease-in-out hover:text-primaryColor hover:cursor-pointer" onClick={() => handleRouting("aboutus")}>About Us </a>
                <a className="my-3 font-semibold block hover:font-extrabold transition duration-150 ease-in-out hover:text-primaryColor hover:cursor-pointer" onClick={() => handleRouting("contactus")}>Contact Us</a>
                <a className="my-3 font-semibold block hover:font-extrabold transition duration-150 ease-in-out hover:text-primaryColor hover:cursor-pointer" onClick={() => handleRouting("faq")}>FAQ</a> 
            </div>
            <div className="p-5">
                <div className="text-sm uppercase font-bold">Contact us</div>
                <a className="my-3 font-semibold block hover:font-extrabold transition duration-150 ease-in-out hover:text-primaryColor hover:cursor-pointer" href="/#">2495 Maynard St, Halifax, CA</a>
                <a className="my-3 font-semibold block hover:font-extrabold transition duration-150 ease-in-out hover:text-primaryColor hover:cursor-pointer" href="/#">contact@cureconnect.com </a> 
            </div>
        </div>
        <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-whiteColor text-sm flex-col max-w-screen-lg items-center">
            <div className="mt-2 flex-row flex">
            <a href="/#" className="w-6 mx-2"> <FaFacebookF className='hover:text-primaryColor transition duration-150 ease-in-out hover:cursor-pointer' size={30} /> </a>
            <a href="/#" className="w-6 mx-2"> <FaTwitter className='hover:text-primaryColor transition duration-150 ease-in-out hover:cursor-pointer' size={30} /> </a>
            <a href="/#" className="w-6 mx-2"> <FaYoutube className='hover:text-primaryColor transition duration-150 ease-in-out hover:cursor-pointer' size={30} /> </a>
            
            </div>
            <div className="my-5">© Copyright 2024. All Rights Reserved.</div>
        </div>
        </div>
    </footer>
  )
}

export default AdminFooter