
export default function MovieCard(props){
    // console.log(props);
    let{title,poster_path}=props;
    return(
        <div className='my-5 h-[34vh] w-[160px] bg-cover bg-center flex items-end m-2 rounded-xl overflow-hidden hover:scale-110 duration-300'
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`}}
        >
        <div className="text-white bg-stone-900/60 w-full text-center p-1.5 text-1xl" >
            {title}
        </div>
        </div>  
    )
}