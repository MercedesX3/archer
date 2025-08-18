import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Hero from './pages/Hero';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Explore from './pages/Explore';

import Logo from "/logo.svg";
import LinkedIn from "/linkedin.svg";
import GitHub from "/github.svg";
import BriefCase from "/briefcase-business.svg";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white select-none">
      {/* Navigation */}
      <nav className="flex items-center justify-between w-screen py-6 px-16 bg-white">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={Logo} alt="Logo" height={24} width={24} />
          </Link>
        </div>
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-[clamp(1rem,1vw,1rem)]">Archer</h1>
        <div className="flex items-center gap-4">
          <Link to="/Explore" className="hover:underline text-[clamp(1rem,1vw,1rem)]">Explore</Link>
          <Link to="/Login" className="hover:underline text-[clamp(1rem,1vw,1rem)]">Login</Link>
          <button
            className="bg-[#5270A3] py-1 px-4 text-[clamp(1rem,1vw,1rem)]
            rounded-md font-semibold text-white hover:bg-[#48628D] transition-colors 
            duration-300 ease-in-out"
            onClick={() => navigate("/SignUp")}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Page content */}
      <main className="flex flex-1 flex-col px-16">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Explore" element={<Explore />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="flex py-6 px-16 bg-white justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src={Logo} alt="Logo" height={24} width={24} />
            </Link>
          </div>
          <div className="flex space-x-4">
            <h1>Designed by Mercedes Xiong</h1>
            <a href="https://mercedes-xiong.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={BriefCase} alt="Logo" height={24} width={24} />
              </a>
              <a href="www.linkedin.com/in/mercedes-xiong" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="Logo" height={24} width={24} />
              </a>
              <a href="https://github.com/MercedesX3" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="Logo" height={24} width={24} />
              </a>
          </div>
      </footer>
    </div>
  );
}
