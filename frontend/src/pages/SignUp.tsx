import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPasswword] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswword(e.target.value);
    }

    
    const handleUserInfo = async () => {
        if (email.includes('@') && password.length >= 6) {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/Explore");
          } else {
            alert("Invalid email or password");
          }
      };
      

    return (
      <div className="flex flex-1 flex-row h-full">
        <div className="w-1/2 flex flex-col px-16">
            <h1 className="font-garamond text-[clamp(1rem,3vw,3rem)] mt-12">Set up your account</h1>
            <h1 className="mt-8 font-arial font-bold text-[clamp(1.2rem,1vw,1rem)]">Email</h1>
            <input
                type="text"
                placeholder="Enter your email address"
                value={email}
                onChange={handleChange}
                className="w-full focus:outline-none focus:ring-0 border-b-2 py-2 placeholder-gray-700"
            />

            <h1 className="mt-4 font-arial font-bold text-[clamp(1.2rem,1vw,1rem)]">Password</h1>
            <input
                type="text"
                placeholder="Enter your email address"
                value={password}
                onChange={handlePassword}
                className="w-full focus:outline-none focus:ring-0 border-b-2 py-2 placeholder-gray-700"
            />

            <button className="bg-[#5270A3] py-2 text-[clamp(1rem,1vw,1rem)] mt-10
                rounded-md font-semibold text-white hover:bg-[#48628D] transition-colors 
                duration-300 ease-in-out"
                onClick={handleUserInfo}
                >Sign Up
            </button>
            <div className="flex flex-row space-x-4 items-center mt-8">
                <hr className="flex-grow border-t-2 border-black my-2 ml-auto"/>
                <h1 className="font-arial whitespace-nowrap">Or continue with</h1>
                <hr className="flex-grow border-t-2 border-black my-2 ml-auto"/>
            </div>
            <button className="bg-[#5270A3] mt-8 py-2 text-[clamp(1rem,1vw,1rem)]
                rounded-md font-semibold text-white hover:bg-[#48628D] transition-colors 
                duration-300 ease-in-out">Sign Up with Google
            </button>
            <div className="justify-center space-x-2 mt-4 flex flex-row"><h1 className="">Already have an account?</h1><Link to="/Login" className="text-[#5270A3] font-semibold hover:text-black">Login</Link></div>
        </div>
        <div className="w-1/2 relative rounded-2xl">
          <video
            src="/architecturevideo.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }
  