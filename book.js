const books = [
  {
    title: "The gods must be crazy",
    authorName: "Tobs Henry",
    releaseYear: 2002,
  },
  {
    title: "Golden Eggs",
    authorName: "Patrick Nico",
    releaseYear: 1995,
  },
  {
    title: "Love is kind",
    authorName: "Faith Alo",
    releaseYear: 2010,
  },
  {
    title: "Why hate?",
    authorName: "Alomaja",
    releaseYear: 1944,
  }
];

const sortByYear = (bookOne, bookTwo) => {
  if (bookOne.releaseYear < bookTwo.releaseYear){
    return -1;
  }
  else if (bookOne.releaseYear > bookTwo.releaseYear){
    return 1;
  }
  else {
    return 0;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear > 1950);
filteredBooks.sort(sortByYear);

console.log(filteredBooks)

// const filteredBooks = (books) => {
//   return books.filter((book) => book.releaseYear > 1950).sort((bookOne, bookTwo) => {
//     if (bookOne.releaseYear < bookTwo.releaseYear){
//     return -1;
//   }
//   else if (bookOne.releaseYear > bookTwo.releaseYear){
//     return 1;
//   }
//   else {
//     return 0;
//   }
//   });
// }

// console.log(filteredBooks(books))
