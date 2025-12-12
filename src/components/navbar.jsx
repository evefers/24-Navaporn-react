import {React} from "react-router-dom";

    export default function Navbar (){
    return(
        <nav className="bg-gray-400 p-4 shadow-md">
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