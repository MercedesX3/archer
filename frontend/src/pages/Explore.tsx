import {useLocation} from "react-router-dom";

export default function Explore() {
    const {state} = useLocation();
    const word = state?.word || "Search";

    return <div>
        <h1>{word}</h1>
        <h1>Screen</h1>
        </div>
}