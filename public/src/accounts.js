function findAccountById(accounts, id) {
  let accountById = accounts.find((account) => {
    if (account.id === id) 
      return account
  })
  return accountById
  }
  
  function sortAccountsByLastName(accounts) {
    let accountsByLastName = accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1)
      return accountsByLastName
  }
  
  function getTotalNumberOfBorrows(account, books) { 
    let count = 0
    books.forEach((book) => {
      book.borrows.forEach((borrow) => {
      if (borrow.id === account.id )
      count ++
    })})
    return count
  }
  
  function getBooksPossessedByAccount(account, books, authors) {
   let filteredBooks =  books.filter((book) => book.borrows.some((borrow) => account.id === borrow.id && borrow.returned === false ))
   let bookAndAuthor = filteredBooks.map((filteredBook) => filteredBook["author"] = authors.find((author) => author.id === filteredBook.authorId))
   return filteredBooks
  }
  

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
