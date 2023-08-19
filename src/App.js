import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import WatchList from './Components/WatchList';
import { useState  } from 'react';



function App() {

  let [watchList,setWatchList]=useState([]);


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
          />
          </>
        } ></Route>

         <Route path="/watchlist" element={
          <WatchList watchList={watchList}
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
