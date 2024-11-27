import React from "react";
import { FaFacebook, FaGoogle ,FaTwitter,FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Q1 from '../../../../assets/swimming.png'
import Q2 from '../../../../assets/class.png'
import Q3 from '../../../../assets/playground.png'
import BG from '../../../../assets/bg.png'
const RightSideNav = () => {
  return (
    <div>
      <div className="p-5 space-y-4 ">
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn w-full border-sky-600 text-sky-600">
          
          <FaGoogle></FaGoogle>Login with Google
        </button>
        <button className="btn w-full border-gray-950">
        
          <FaGithub></FaGithub>Login with Github
        </button>
      </div>
      <div className="p-5  mb-6">
        <h2 className="text-2xl font-bold">Find Us On</h2>
        <a className=" p-4 w-full  text-sky-600 flex items-center border border-gray-300 rounded-t-lg ">
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a className="w-full p-4 flex items-center border border-gray-300">
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>
        <a className="w-full p-4 flex items-center border border-gray-300 rounded-b-lg">
         <FaInstagram className="mr-3"></FaInstagram>
          instagram
        </a>
      </div>

      {/* Q Zone*/}
      <div className="p-5 space-y-6 bg-slate-100 rounded-lg  mb-6">
        <h2 className="text-2xl font-bold">FQ-Zone</h2>
       <img src={Q1} alt="" />
       <img src={Q2} alt="" />
       <img src={Q3} alt="" />
      </div>

    <div className="mb-6">
        <img src={BG} alt="" />
    </div>

    </div>
    
 

  );
};

export default RightSideNav;
