import React from 'react'
import bookImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex justify-between items-center px-16 py-10 bg-gray-100 mt-24 mb-12 rounded-2xl'>
            <div className='flex flex-col gap-10 items-start'>
                <h3 className='text-6xl/snug font-medium text-start'>Books to freshen up your bookshelf</h3>
                <button className='bg-[#23BE0A] px-5 py-3 rounded-md text-white font-bold text-base'>View The List</button>
            </div>
            <div className='w-1/2'>
                <img className='w-7xl p-10' src={bookImage} alt="" />
            </div>
        </div>
    )
}

export default Banner