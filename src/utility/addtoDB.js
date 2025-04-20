const getStoredBook =()=>{
    const storedBookSTR = localStorage.getItem('readlist');

    if(storedBookSTR){
        const storedBook = JSON.parse(storedBookSTR);
        return storedBook;
    }
    else {
        return [];
    }

}

const addToStoredBook = (id) => {
    console.log(id);
    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)){
        alert('Already added to readlist')
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readlist', data);
    }
}

export { addToStoredBook};