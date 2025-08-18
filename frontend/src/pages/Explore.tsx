import {useLocation} from "react-router-dom";

export default function Explore() {
    const {state} = useLocation();
    const word = state?.word || "Search";

    return <h1>{word}</h1>
}