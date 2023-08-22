import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import WatchList from './Components/WatchList';
import { useState, useEffect  } from 'react';


function App() {

  let [watchList,setWatchList]=useState([]);

  let [pageNo,setPageNo]=useState(1);
    


  let  handleNext=()=>{
    setPageNo(pageNo+1);
}

    let handlePrev= ()=>{
        if(pageNo>1){
            setPageNo(pageNo-1);
        }
    }
    


  useEffect(()=>{
    let favMoviesFromLocalStorage=JSON.parse(localStorage.getItem("movies-app"));
    if(favMoviesFromLocalStorage == null){
        return;
    }
    setWatchList(favMoviesFromLocalStorage)
},[])


  let handleAddtoWatchList=(movieObj)=>{
    // let newWatchList=[...watchList];
    // newWatchList.push(id)
    // console.log(newWatchList);
    // setWatchList(newWatchList);

    // same thing in one line
    let newWatchList = [...watchList,movieObj];
    localStorage.setItem("movies-app",JSON.stringify(newWatchList))
    setWatchList(newWatchList)
}

let handleRemovefromWatchList=(movieObj)=>{
    let newWatchList=watchList.filter((movie)=>{
        return movie.id!=movieObj.id;
    })
    localStorage.setItem("movies-app",JSON.stringify(newWatchList))
    setWatchList(newWatchList);
}
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
          <Banner/>
          <Movies watchList={watchList}
                  setWatchList={setWatchList}  
                  handleAddtoWatchList={handleAddtoWatchList}
                  handleRemovefromWatchList={handleRemovefromWatchList}
                  pageNo={pageNo}
                  handleNext={handleNext}
                  handlePrev={handlePrev}             
          />
          </>
        } ></Route>

         <Route path="/watchlist" element={
          <WatchList watchList={watchList}
                     setWatchList={setWatchList}
                     handleRemovefromWatchList={handleRemovefromWatchList}
                    /> 
        } ></Route>

        <Route path='/banner' element={
          <Banner/>
        }></Route>

      </Routes>
    </BrowserRouter>     
  );
}

export default App;
