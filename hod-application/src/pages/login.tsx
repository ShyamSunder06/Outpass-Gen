import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";

import {  useState } from "react";
import axios from "axios";

import { Button } from "../components/ui/buttonss";
import { BACKEND_URL } from "../config";



export function Signin() {
    const [rollNo, setRollNo] = useState<string>(" ");
    const [password, setPassword] = useState<string>(" ");
    const navigate = useNavigate();
    

    return (
       
        
        <div className=" rounded-md bg-neutral-900 flex flex-col items-center justify-center w-screen absolute left-0 top-0 h-screen"> 
              {/* <ShootingStars/>
                    <StarsBackground/> */}
            
            <div className=" w-1/3 relative">
            
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          
          <h1 className="font-bold text-xl text-white mb-4 relative z-50 w-full text-center">
           HOD login
          </h1><br></br>
                    
                    
          <h2 className="font-bold text-xl text-white  w-full text-center"> LOGIN</h2>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="grid w-full max-w-sm items-center gap-1.5">
                         <label htmlFor="email" className=" flex justify-start text-white">Email</label>
                         <Input type="text" id="email" placeholder="Rollno" onChange={(e) => setRollNo(e.target.value)} />
                     </div>
                    
                     <div className="grid w-full max-w-sm items-center gap-1.5 py-5  ">
                         <label htmlFor="email" className=" flex justify-start text-white">Password</label>
                         <Input type="text" id="email" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                     </div>
<br></br>
            <Button className="" val={"Signin"} onClicked={async () => {
                        

                }}>Sign In</Button>
               
                    <p className="mt-2 text-center text-sm leading-5 text-white max-w">
                    {"Don't have account ? "}
                 <Link to={"/signup"}
                      className="font-medium text-blue-500 hover:text-blue-500 ">
                       {" Sign-up"}
                   </Link>
                 </p>
 
          
              </div>
              </div>
          
                    {/* <Meteors number={40} /> */}
                   
        </div>
            </div>
    </div>
        

   )

}