function findAuthorById(authors, id) {
  //find the author by searching the id
  let result = authors.find((auth) => auth.id === id)
  return result
}

function findBookById(books, id) {
  //find the book referencing the book id
  let result = books.find((book) => book.id === id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
  //create an array with two inbedded arrays of checked out or in books
 const result = [books.filter((book) => book.borrows[0].returned === false), 
                books.filter((book) => book.borrows[0].returned === true)]
  return result 
}

function getBorrowersForBook(book, accounts) {
  //get the array for borrows of the book
  const test = book.borrows
  //loop the book with the findAccountById function
  let result = []
  const next = test.forEach((borrow) => {
    if (borrow.id) {
      //finds the account corresponding to the borrow
     let first =   accounts.find((acc) => borrow.id === acc.id)
     //adds the returned status
     first.returned = borrow.returned
     //adds the account with the returned status to the result array
     result.push(first)
    }})
    //returns the updated array
    return result.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
