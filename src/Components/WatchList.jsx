import { useEffect, useState, useSyncExternalStore } from "react"
import genreids from "../Utility/genre"
export default function WatchList(props){

    let {watchList,setWatchList ,handleRemovefromWatchList }=props
    let [genreList,setGenreList]=useState(["All Genres"]);
    let [currGenre,setCurrGenre]=useState("All Genres");
    let [search,setSearch]=useState("");


    useEffect(()=>{
        let temp=watchList.map((moviesObj)=>{
            return genreids[moviesObj.genre_ids[0]];
        })
        temp= new Set(temp);

        setGenreList(["All Genres",...temp]);
    },[watchList])

    let handleFilter=(genre)=>{
        setCurrGenre(genre)
    }
    let handleSearch =(e)=>{
        setSearch (e.target.value);       
    }

    let sortIncreasing=()=>{
        let sorted =watchList.sort((movieA,movieB)=>{
            return movieA.vote_average-movieB.vote_average;
        })
        setWatchList([...sorted]);
    }

    let sortDecreaseing=()=>{
        let sorted =watchList.sort((movieA,movieB)=>{
            return movieB.vote_average-movieA.vote_average;
        })
        setWatchList([...sorted]);
    }

    
    return( 
        <>
        <div className="flex justify-center flex-wrap">
            {genreList.map((genre)=>{
                return <div onClick={()=>handleFilter(genre)} key={genre} className={currGenre==genre?"m-3 h-[3rem] w-[12rem] bg-blue-400 rounded-xl flex justify-center items-center text-white font-bol hover":
                "m-3 h-[3rem] w-[12rem] bg-gray-300 rounded-xl flex justify-center items-center text-white font-bol hover:cursor-pointer"}>{genre}</div>
            })}
        </div>
        <div className="flex justify-center my-4">
            <input onChange={handleSearch} value={search} className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 text-lg" 
            placeholder="Search Movies"
            type="text"></input>
        </div>

        <div className="m-6 rounded-lg overflow-hidden border shadow-md">
            <table className="p-4 w-full text-center">
                <thead className="h-[2.5rem] bg-gray-50 border-b-2">
                    <tr>
                        <th>Name</th>
                        <th  className="flex">
                            <div onClick={sortIncreasing} className="p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-up"></i></div>
                            <div className="p-2">Ratings</div>
                            <div onClick={sortDecreaseing} className="p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-down"></i></div>
                        </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th className=" text-red-500">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {watchList.filter((moviesObj)=>{
                        if(currGenre=="All Genres"){
                            return true;
                        }
                        return genreids[moviesObj.genre_ids[0]]==currGenre;
                    })
                    .filter((moviesObj)=>{
                        return moviesObj.title.toLowerCase().includes(search.toLowerCase());
                    })
                    .map((moviesObj)=>{
                        return(
                        <tr className="border-b-2">
                        <td className="flex items-center mx-4 py-2"> <img className="h-[8rem] w-[7rem]"
                        src={"https://image.tmdb.org/t/p/original/"+moviesObj.poster_path} alt="" />
                        <div className="mx-2">{moviesObj.title}</div>                        
                        </td>
                        <td>{moviesObj.vote_average}</td>
                        <td>{moviesObj.popularity}</td>
                        <td>{genreids[moviesObj.genre_ids[0]]}</td>
                        <td onClick={()=>handleRemovefromWatchList(moviesObj)} className=" text-red-500"><i className="fa-solid fa-trash"></i></td>
                        </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>

        </>
        
        
    )
}