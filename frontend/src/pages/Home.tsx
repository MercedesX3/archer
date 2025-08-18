import { useNavigate } from "react-router-dom"
import ScrollBar from "../components/ScrollBar"

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="">
            <button className="font-garamond text-[clamp(1rem,3vw,3rem)] relative transform 
                transition-transform duration-400 ease-in-out hover:translate-x-6 "
                onClick={()=>navigate("../Explore", {state: {word: "Construction Methods"}})}
            >
                Discover
            </button>
            <ScrollBar items={["Elements", "Structures", "Orders", "Materials"]} onSelect={(item) => console.log("Selected", item)}/>
            <button className="font-garamond text-[clamp(1rem,3vw,3rem)] relative transform 
                transition-transform duration-400 ease-in-out hover:translate-x-6 "
                onClick={()=>navigate("../Collections", {state: {word: "Construction Methods"}})}
            >
                Your Collections
            </button>
            <ScrollBar items={["Elements", "Structures", "Orders", "Materials"]} onSelect={(item) => console.log("Selected", item)}/>
        </div>
    )
}