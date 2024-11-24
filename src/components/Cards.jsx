import React from 'react'
import Items from './Items';


const Cards = ({ openCart, openSelectedItems, handleShow, data, handleAddPlayer, selectedItems }) => {



    return (
        <div className='flex flex-col gap-6 '>
            <div className='flex flex-col md:flex-row gap-3 justify-between items-center  w-[95%] md:w-[80%] m-auto my-7 flex-wrap'>
                <h2 className='text-2xl font-bold'>Available Players</h2>
                <div className='flex justify-center items-center border gap-1  rounded-[30px] overflow-hidden'>
                    <button className={`border-r p-2 cursor-pointer ${openCart ? "bg-[#E7FE29]":"bg-[white]"}`} onClick={()=>handleShow("available")}>Available</button>
                    <button className={`p-2 cursor-pointer ${openSelectedItems ? "bg-[#E7FE29]" : "bg-[white]"} `} onClick={() => handleShow("selected")}>Selected ({`${selectedItems?.length}`}) </button>
                </div>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-2 w-full md:w-[90%] m-auto'>
                {data?.map((item)=>(
                    <Items key={item.id} item={item} handleAddPlayer={handleAddPlayer}/>
                ))}              
            </div>
        </div>
    )
}

export default Cards
