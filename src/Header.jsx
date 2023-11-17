import { Link } from "react-router-dom";

const Header = () => {
    return <header className="bg-gray-800 p-4">
        <div className="flex justify-between h-16 items-center pl-7 pr-20  list-none">
            <Link to="/">  <h1 className="font-bold font-mono text-3xl text-white cursor-pointer">SneakPeak👟</h1> </Link>
            <div className="flex gap-20">
                <li className="cursor-pointer text-xl text-white">♡ {+1}</li>
                <Link to="/cart"><li className="text-xl cursor-pointer text-white">&#128722; {+1}</li> </Link>
            </div>
        </div>
    </header>
}

<h1></h1>
export default Header;