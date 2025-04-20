import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoredBook } from '../../utility/addtoDB';

const BookDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    //console.log(data[id]);
    const foundBook = data.find(book=> book.bookId == id)
    console.log(foundBook);
    const {bookName, review,category,image,tags,author,totalPages,publisher,yearOfPublishing,rating} = foundBook;

    const handleMarkAsRead = () => {
        addToStoredBook(id);
    }



    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                src={image}
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <p>By : {author}</p>
                <hr />
                <p>{category}</p>
                <hr />
                <p><span className='font-bold'>Review : </span>{review}</p>
                <p><span className='mr-6 font-bold'>Tag</span>
                    {
                        tags.map((tag, index) => <span key={index} className='text-green-600 font-bold p-3'>#{tag}</span>)
                    }
                </p>
                <hr />
                <p>Number of Pages :  {totalPages}     </p>
                <p>Publisher:      {publisher} </p>
                <p>Year of Publishing :     {yearOfPublishing}</p>
                <p>Rating :    {rating} </p>
                <div className="card-actions justify-end">
                    <button onClick={()=> handleMarkAsRead(id)} className="btn btn-primary">Mark as Read</button>
                    <button className="btn btn-primary">Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default BookDetails