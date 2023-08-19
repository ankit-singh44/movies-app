import genreids from "../Utility/genre"
export default function WatchList(props){

    let {watchList,handleRemovefromWatchList }=props

    
    return( 
        <>
        <div className="flex justify-center">
            <div className="h-[3rem] w-[12rem] bg-blue-400 rounded-xl flex justify-center 
            items-center text-white font-bold">All Genre</div>
        </div>
        <div className="flex justify-center my-4">
            <input className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 text-lg" 
            placeholder="Search Movies"
            type="text"></input>
        </div>

        <div className="m-6 rounded-lg overflow-hidden border shadow-md">
            <table className="p-4 w-full text-center">
                <thead className="h-[2.5rem] bg-gray-50 border-b-2">
                    <tr>
                        <th>Name</th>
                        <th  className="flex">
                            <div className="p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-up"></i></div>
                            <div className="p-2">Ratings</div>
                            <div className="p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-down"></i></div>
                        </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th className=" text-red-500">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {watchList.map((moviesObj)=>{
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