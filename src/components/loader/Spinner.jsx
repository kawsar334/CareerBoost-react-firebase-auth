import React from 'react'

const Spinner = () => {
    return (
        <div className='w-screen h-screen flex justify-center '>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span></div>
    )
}

export default Spinner