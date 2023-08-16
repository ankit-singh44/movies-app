
export default function MovieCard(props){
    // console.log(props);
    let{title,poster_path,id}=props;
    return(
        <div className='my-5 h-[34vh] w-[160px] bg-cover bg-center flex flex-col justify-between items-end m-2 rounded-xl overflow-hidden hover:scale-110 duration-300'
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`}}
        >
            {props.watchList.includes(id)?

            <div onClick={()=>props.handleRemovefromWatchList(id)} 
            className="m-3 bg-stone-900/90 h-6 w-6 
            flex items-center justify-center rounded-lg 
            hover:cursor-pointer">&#10060;</div>:
            <div onClick={()=>props.handleAddtoWatchList(id)} 
            className="m-3 bg-stone-900/90 h-6 w-6 
            flex items-center justify-center rounded-lg 
            hover:cursor-pointer">&#128525;</div>

            }

            <div className="text-white bg-stone-900/60 w-full text-center p-1.5 text-1xl" >
                {title}
            </div>
        </div>  
    )
}