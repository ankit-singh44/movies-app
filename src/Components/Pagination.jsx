
export default function Pagination(props){
    let {pageNo,handleNext,handlePrev}=props;

    return(
        <div className="flex justify-center m-2 bg-gray-500 text-white">
                <div onClick={handlePrev} className="mx-1 p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-left"></i></div>
                <div className="mx-1 p-2">{pageNo}</div>
                <div onClick={handleNext} className="mx-1 p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-right"></i></div>
            </div>
    )
}