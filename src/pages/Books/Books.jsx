import React,
{Suspense}
// ,{useEffect, useState} 
from 'react'
import Book from '../Book/Book';

const Books = ({bookData}) => {
    //console.log(bookData)
    // const [books, setBooks] = useState([])

    // useEffect(() => {
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => setBooks(data))
    // },[])
    // console.log(books)

    // const bookPromise = fetch('booksData.json').then(res => res.json());

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Suspense fallback={<div>Loading...</div>}>
                {/* <Book bookPromise={bookPromise}></Book> */}
                {bookData.map(singleBook => (<Book key={singleBook.bookId} singleBook={singleBook}></Book>))}
            </Suspense>
        </div>
    )
}

export default Books