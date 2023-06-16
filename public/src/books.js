//making use of a function from accounts.js as a helper function
const { findAccountById } = require('./accounts')


function findAuthorById(authors, id) {
  let authorById = authors.find((author) => author.id === id)
  return authorById
}

function findBookById(books, id) {
  let bookById = books.find((book) => book.id === id)
  return bookById
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = []
  let checkedIn = []
  let fullArray = [checkedOut, checkedIn]
  books.forEach((book) => {
    book.borrows.find((borrow) => borrow.returned === false) ? checkedOut.push(book) : checkedIn.push(book)
    })
  return fullArray
}

function getBorrowersForBook(book, accounts) {
const result = book.borrows.map((borrow) => {
  //applying helper function
  const accountInfo = findAccountById(accounts, borrow.id);
  const newTransaction = {
      ...borrow,
      ...accountInfo,
    }
  return newTransaction
})
result.splice(10);
return result;
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
