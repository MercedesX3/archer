import ScrollBar from "../components/ScrollBar"

export default function Home() {
    return (
        <div>
            <h1 className="font-garamond text-[clamp(1rem,3vw,3rem)]">Discover</h1>
            <ScrollBar items={["Elements", "Structures", "Orders", "Materials"]} onSelect={(item) => console.log("Selected", item)}/>
            <h1 className="font-garamond text-[clamp(1rem,3vw,3rem)]">Your Collections</h1>
        </div>
    )
}