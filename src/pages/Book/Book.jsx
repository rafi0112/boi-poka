import React, {   } from 'react'
import { FaStarHalfStroke } from "react-icons/fa6";
import { NavLink } from 'react-router';


const Book = ({singleBook}) => {
    // const books = use(bookPromise)
    // console.log(books)
    //console.log(singleBook)

    return (
        <NavLink to={`/bookDetails/${singleBook.bookId}`}>
            <div className="card bg-base-100 w-[350px]  shadow-sm border-2 border-gray-200 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
  <figure>
    <img  className='h-[166px] rounded-xl'
      src={singleBook.image}
     />
  </figure>
  <div className='flex gap-5 mt-2'>
    {singleBook.tags.map((tag,index) => <p key={index} className='border border-gray-300 font-bold py-1 px-2 rounded-4xl text-xs text-[#23BE0A]'>{tag}</p>)}
  </div>
    <div className="card-body ">
        <h2 className="card-title mr-2">
            {singleBook.bookName}
            <div className="badge badge-warning">
                {singleBook.yearOfPublishing}
            </div>
        </h2>
        <p className='flex flex-start text-base'>By: {singleBook.publisher}</p>
        {/* <div className="flex gap-0 ">
        <div className="badge badge-outline mr-1 w-72 overflow-y-auto">{singleBook.publisher}</div>
        <div className="badge badge-outline">{singleBook.yearOfPublishing}</div>
        
        </div> */}
        <div className='flex justify-between items-center gap-30'>
            <p className='text-base'>{singleBook.category}</p>
        
            <div className='flex justify-end items-center mt-2'>
                <div className="mr-1  text-base">{singleBook.rating}</div>
                <FaStarHalfStroke  className='text-base'/>
            </div>
        </div>
    </div>
        </div>
        </NavLink>


    )
}

export default Book