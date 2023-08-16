import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

export default function Movies(){
    let [movies,setMovies]=useState(undefined);
    let [pageNo,setPageNo]=useState(1);
    let [watchList,setWatchList]=useState([]);

    let handlePrev= ()=>{
        if(pageNo>1){
            setPageNo(pageNo-1);
        }
    }
    let  handleNext=()=>{
        setPageNo(pageNo+1);
    }

    let handleAddtoWatchList=(id)=>{
        // let newWatchList=[...watchList];
        // newWatchList.push(id)
        // console.log(newWatchList);
        // setWatchList(newWatchList);

        // same thing in one line
        let newWatchList = [...watchList,id];
        localStorage.setItem("movies-app",JSON.stringify(newWatchList))
        setWatchList(newWatchList)
    }

    let handleRemovefromWatchList=(id)=>{
        let newWatchList=watchList.filter((movieId)=>{
            return movieId!=id;
        })
        localStorage.setItem("movies-app",JSON.stringify(newWatchList))
        setWatchList(newWatchList);
    }


    useEffect(()=>{
        let favMoviesFromLocalStorage=JSON.parse(localStorage.getItem("movies-app"));
        setWatchList(favMoviesFromLocalStorage)
    },[])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=fdfa545a5bd09648cfa3a73362b23a3a&page=${pageNo}`)
        .then(function(response){
            // console.log(response.data.results);
            setMovies(response.data.results);
        })
    },[pageNo])

    if(movies == undefined){
        return(
            <div>Loading..</div>
        )
    }


    return(
        <div className="m-4">
            <div className="m-4 text-2xl text-center font-bold">Trending Movies</div>
            <div className="flex flex-wrap gap-5 justify-around">

            {movies.map((movie)=>{
                return(<MovieCard 
                                  id={movie.id}
                                  key={movie.id}
                                  title={movie.title} 
                                  poster_path={movie.poster_path}
                                  watchList={watchList}
                                  handleAddtoWatchList={handleAddtoWatchList}
                                  handleRemovefromWatchList={handleRemovefromWatchList}/>)
            })}
            {/* <MovieCard title={movies[0].title} poster_path={movies[0].poster_path}/> */}
            </div>
            <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>
        </div>
    )   
}