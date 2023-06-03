function getTotalBooksCount(books) {
  //adds the total of the books
  let sum = 0
  books.forEach((book) => sum += 1)
  return sum
}

function getTotalAccountsCount(accounts) {
  //adds the total of the accounts
  let sum = 0
  accounts.forEach((user) => sum += 1)
  return sum
}

function getBooksBorrowedCount(books) {
  //checks how many books are being borrowed
 let result = books.filter((book) => book.borrows[0].returned === false)
 return result.length
}



function getMostCommonGenres(books) {
  //creates an array of genres for each book
  const bookGenres = books.map((book) => book.genre)
  //declares the result array
  const result = []
  //loops through the created genre array
  bookGenres.map((genre) => {
    //checks if the genre exists in the result array
const genreLocation = result.findIndex((element) => element.name === genre)
//if the genre exists, adds one to the count of books with that genre
if (genreLocation >= 0){
  result[genreLocation].count = result[genreLocation].count + 1
  //if the genre doesn't exist creates a new object in the result array for the new genre
}else {
  result.push({
    name: genre,
    count: 1,
  })
}
  })
  //returns the sorted array of the top 5 most common genres
  return result.sort((styleA, styleB) => styleB.count - styleA.count).slice(0, 5)
}




function getMostPopularBooks(books) {
  //create a new array of genres and borrows count
  const result = books.reduce((acc, book) => {
      acc.push({
        name: book.title,
        count: book.borrows.length,
      })
    return acc
  }, [])
  //sorts books by popularity
  return result.sort((titleA, titleB) => titleB.count - titleA.count).slice(0,5)
}


function getMostPopularAuthors(books, authors) {
  //creates the result array
const result = []
//loops through the books array
books.map((author) => {
  //finds the author for the book
  const findAuthor = authors.find((auth) => author.authorId === auth.id)
  //checks if the author exists in the result array
  const authorLocation = result.findIndex((element) => element.name === (findAuthor.name.first + " " + findAuthor.name.last))
  //if author exists, adds the borrows account for the book to authors count
  if (authorLocation >= 0){
    result[authorLocation].count = result[authorLocation].count + (author.borrows.length)
 //if author doesn't exist in the result array, creates a new object with the borrow count
  }else {
    result.push({
      name: findAuthor.name.first + " " + findAuthor.name.last,
      count: author.borrows.length,
    })
  }
})
//returns the first five in the sorted array of the borrow count per author
return result.sort((authorA, authorB) => authorB.count - authorA.count).slice(0,5)

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
