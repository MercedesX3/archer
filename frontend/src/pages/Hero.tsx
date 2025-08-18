import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
      <div className="mt-10 select-none">
        <div className="text-right">
          <h1 className="font-garamond text-[clamp(1rem,3vw,3rem)] mb-8 leading-tight">
            archer def:
          </h1>
          <h1 className="drop-shadow-sm opacity-90 font-fira font-bold text-[clamp(2rem,10vw,10rem)] m-0 leading-none">
            A DICTIONARY FOR ARCHITECTS
          </h1>
          <hr className="border-t-2 border-black w-full my-2 ml-auto"/>
        </div>
        <div className="mt-6">
            <h1 className="font-arial font-bold text-[clamp(1rem,2vw,2rem)]">Get Started</h1>
            <div className="justify-between flex flex-row">
                <div className="flex flex-col items-start">
                    <button className="font-arial text-[clamp(1.1rem,1vw,1rem)] relative transform 
                    transition-transform duration-400 ease-in-out hover:translate-x-6 
                    hover:text-[#5270A3]"
                    onClick={()=>navigate("./Explore", {state: {word: "Elements & Features"}})}
                    >
                        Elements & Features
                    </button>

                    <button className="font-arial text-[clamp(1.1rem,1vw,1rem)] relative transform 
                    transition-transform duration-400 ease-in-out hover:translate-x-6 
                    hover:text-[#5270A3]"
                    onClick={()=>navigate("./Explore", {state: {word: "Structures & Building"}})}
                    >
                        Structures & Building
                    </button>

                    <button className="font-arial text-[clamp(1.1rem,1vw,1rem)] relative transform 
                    transition-transform duration-400 ease-in-out hover:translate-x-6 
                    hover:text-[#5270A3]"
                    onClick={()=>navigate("./Explore", {state: {word: "Orders & Proportions"}})}
                    >
                        Orders & Proportions
                    </button>
                </div>
                <div className="flex flex-col items-start">
                    <button className="font-arial text-[clamp(1.1rem,1vw,1rem)] relative transform 
                    transition-transform duration-400 ease-in-out hover:translate-x-6 
                    hover:text-[#5270A3]"
                    onClick={()=>navigate("./Explore", {state: {word: "Materials & Techniques"}})}
                    >
                        Materials & Techniques
                    </button>

                    <button className="font-arial text-[clamp(1.1rem,1vw,1rem)] relative transform 
                    transition-transform duration-400 ease-in-out hover:translate-x-6 
                    hover:text-[#5270A3]"
                    onClick={()=>navigate("./Explore", {state: {word: "Construction Methods"}})}
                    >
                        Construction Methods
                    </button>

                    <button className="font-arial text-[clamp(1.1rem,1vw,1rem)] relative transform 
                    transition-transform duration-400 ease-in-out hover:translate-x-6 
                    hover:text-[#5270A3]"
                    onClick={()=>navigate("./Explore", {state: {word: "Urban & Spatial Concepts"}})}
                    >
                        Urban & Spatial Concepts
                    </button>
                </div>
                <div className="flex flex-col items-start">
                    <button className="font-arial text-[clamp(1.1rem,1vw,1rem)] relative transform 
                    transition-transform duration-400 ease-in-out hover:translate-x-6 
                    hover:text-[#5270A3]"
                    onClick={()=>navigate("./Explore", {state: {word: "Decorative & Symbolic Motifs"}})}
                    >
                        Decorative & Symbolic Motifs
                    </button>

                    <button className="font-arial text-[clamp(1.1rem,1vw,1rem)] relative transform 
                    transition-transform duration-400 ease-in-out hover:translate-x-6 
                    hover:text-[#5270A3]"
                    onClick={()=>navigate("./Explore", {state: {word: "Historical Periods"}})}
                    >
                        Historical Periods
                    </button>

                    <button className="font-arial text-[clamp(1.1rem,1vw,1rem)] relative transform 
                    transition-transform duration-400 ease-in-out hover:translate-x-6 
                    hover:text-[#5270A3]"
                    onClick={()=>navigate("./Explore", {state: {word: "See More"}})}
                    >
                        See More
                    </button>
                </div>
            </div>
        </div>
      </div>
    );
  }
  