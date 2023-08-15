import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div className="flex items-center p-2">
            <img className="h-14 mx-6" src="https://icon-library.com/images/imdb-icon-png/imdb-icon-png-15.jpg"/>
            {/* tutotial image url below for backup with h-20 as height*/}
            {/* https://static.thenounproject.com/png/780122-200.png */}
            <Link className="text-2xl font-bold underline mx-3 text-blue-500" to={"/"}>Movies</Link>
            <Link className="text-2xl font-bold underline mx-3 text-blue-500" to={"/watchlist"}>WatchList</Link>
        </div>
    )
}