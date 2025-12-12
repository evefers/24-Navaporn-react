import { Link } from "react-router-dom";

    export default function Navbar (){
    return(
        <nav className="bg-blue-400 p-10 shadow-md">
            <ul className="flex gap-4 justify-end">
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/Owner">Owner</Link>
                </li>
</ul>
        </nav>
    )
}