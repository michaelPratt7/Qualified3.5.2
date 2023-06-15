function getTotalBooksCount(books) {
  let count = 0
  books.forEach((book) => count++)
  return count
}

function getTotalAccountsCount(accounts) {
  let count = 0
  accounts.forEach((account) => count++)
  return count
}

function getBooksBorrowedCount(books) {
  let sum = 0
  books.forEach((book) => {
   let borrowedBooks = book.borrows.filter((borrow) => borrow.returned === false)
   sum += borrowedBooks.length
  })
  return sum
}

function getMostCommonGenres(books) {
  let result = {}
  books.forEach((book) => {
    if (result[book.genre]) {
      result[book.genre] += 1
    }
    else {
      result[book.genre] = 1
    }
  })
  let combinedArray = []
  for(let key in result)
    {
      const newValue = {
        name: key, count: result[key]
      }
      combinedArray.push(newValue)
    }
  combinedArray.sort((result1, result2) => (result2.count > result1.count ? 1 : -1))
  combinedArray.splice(5)
  return combinedArray
}


function getMostPopularBooks(books) {
  return books.map((book) => {
  return {name:book.title, count: book.borrows.length}}).sort((book1, book2) => {
  return book2.count - book1.count}).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  return authors.map((author) => {
   let filtered_books = books.filter((book) => author.id === book.authorId)
 author.count = filtered_books.reduce((count, book) => (count + book.borrows.length), 0)
 author.name = (author.name.first + " " + author.name.last)
 delete author.id
 return author}).sort((authorA, authorB) => authorB.count - authorA.count).slice(0,5)
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
