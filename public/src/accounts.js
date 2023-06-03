function findAccountById(accounts, userId) {
  // use .find() to find account for id
  let result = accounts.find(({id}) => id === userId)
  //returns the found account
  return result
}

function sortAccountsByLastName(accounts) {
  // sorts the account by last name
  let result = accounts.sort((userA, userB) => 
   userA.name.last.toLowerCase() > userB.name.last.toLowerCase() ? 1 : -1
  )
  //returns the sorted array of accounts
  return result
}

function getTotalNumberOfBorrows(account, books) {
  //create an array to input counts for each iteration of books
  let result = []
  //iterate books to get borrows by account id
  const first = books.forEach((book) =>{
  const borrow = book.borrows
  const list = borrow.filter(({id}) => id === account.id)
  result.push(list.length)
})
//creates an accumulator to get the total amount of borrows by account
return result.reduce((total, num) => total + num)
}

function getBooksPossessedByAccount(account, books, authors) {
  //creates an array to iterate through books an account has
 let result =[]
 //iterates through the books to check if the account has the book
 const filt = books.forEach((book) => {
  const borr = book.borrows[0]
  // checks if the book is returned and if the accounts id matches
  if (borr.returned === false && borr.id === account.id){
    //sets a variable to add into the book object
const authorVar = authors.find((auth) => book.authorId === auth.id)
//updates the book object
book.author = authorVar
//pushes the book object in the new array
result.push(book)
 }
 })
 // returns the new array
 return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
