// Can you write functions that allow you to:

// Search by book name.
// Display the total number of books onloan/not on loan
// Alter a book’s status (onloan/not on loan)
// Add a new book to the library
// Remove a book from the library 


const library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        isLoaned: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        isLoaned: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        isLoaned: false
    }];


function loanStatus(lib) {
    for (const book of lib) {
        const bookInfo = `${book.title} by ${book.author}`;

        if (book.isLoaned) {
            console.log(`Out on loan: ${bookInfo}`);
        } else {
            console.log(`On the shelf: ${bookInfo}`);
        }
    }
}


function getBooksByAuthor(authorName) {
    const booksByAuthor = [];
  
    for (const book of library) { // Use for...of loop for cleaner iteration
      if (book.author === authorName) {
        const bookStatus = book.isLoaned ? 'Out on loan' : 'On the shelf'; 
        booksByAuthor.push(`${book.title} - ${bookStatus}`);
      }
    }
  
    return booksByAuthor;
}
  

function searchByBookName(searchTerm) {
    // searchByBookName should return an array of books matching the full book name (case-insensitive)
    // 1. create an empty array to store output 
    const booksByTitle = [];
    // 2.loop through main array to check anf if passes store this into the empty array
    for (const book of library) { // Use for...of loop for cleaner iteration
        if (book.title.toLowerCase() === searchTerm.toLowerCase()) {
        //   created object as element of the output Array
            booksByTitle.push({title: book.title,  author: book.author});
        }
      }
    // 3. outside of the loop return the array
    return booksByTitle
}
  
  
function displayLoanTotals() {
    // displayLoanTotals should correctly count and log the number of books on loan and not on loan 
    // 1. create a variable to store no of books loaned 
    let BookLoaned = 0;
    let BookNotLoaned = 0;
    for (const book of library){
        book.isLoaned == false ? BookLoaned++ : BookNotLoaned++
    }
    // 3. return `Total books on loan: ${}`
    console.log(`Total books not on loan: ${BookNotLoaned}`) 
    console.log(`Total books on loan: ${BookLoaned}`) 
}
  
  
function alterBookStatus(bookTitle, newStatus) {
    // alterBookStatus should change the isLoaned property of a book
    for (const book of library){
        if (book.title === bookTitle){
            book.isLoaned = newStatus
        }
    }
}
  
  
function addNewBook(title, author, isLoaned) {
    // addNewBook should add a new book object to the library
    library[library.length]= {"title": `${title}`, "author": `${author}`,"isLoaned": isLoaned}
}
  

function removeBook(bookTitle) {
    // removeBook should remove a book from the library by its title
    for (let i=0;i<library.length;i++){
        if (library[i].title === bookTitle){
            library.splice(i,1)
        }
    }
    
}
  

  
// Personal testing function calls 
console.log(searchByBookName("the road ahead"));
console.log(displayLoanTotals())

  

// Search for book by author 
const authorName = 'Suzanne Collins';
const booksStatus = getBooksByAuthor(authorName);

console.log(`Books by ${authorName}:`);
console.log(booksStatus);

console.log(addNewBook("book", "leo", false));

// See loan status of all books    
loanStatus(library);





// Leave this code here for automated testing

module.exports = {
    library,
    loanStatus,
    getBooksByAuthor,
    searchByBookName,
    displayLoanTotals,
    alterBookStatus,
    addNewBook,
    removeBook
  };