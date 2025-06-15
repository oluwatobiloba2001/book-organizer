Here’s a professional `README.md` for your code:

---

# Book Filtering and Sorting Script

This script processes an array of book objects by filtering and sorting them based on their release year. It highlights books released after the year 1950 and orders them in ascending order of their release year.

## Features

* **Filter Books**: Excludes books released in or before the year 1950.
* **Sort Books**: Orders the filtered books by their release year in ascending order.
* **Reusable Logic**: Demonstrates two approaches to achieve the same functionality:

  1. Using separate filter and sort operations.
  2. Combining filter and sort into a single function.

## How It Works

1. **Input Data**:
   An array of book objects, each containing:

   * `title`: The book's title.
   * `authorName`: The author's name.
   * `releaseYear`: The year the book was released.

2. **Filtering**:
   Filters out books released in or before 1950 using `Array.prototype.filter()`.

3. **Sorting**:
   Orders the filtered books by release year using a custom comparator in `Array.prototype.sort()`.

4. **Output**:
   Logs the filtered and sorted books to the console.

## Code Example

```javascript
const books = [
  { title: "The gods must be crazy", authorName: "Tobs Henry", releaseYear: 2002 },
  { title: "Golden Eggs", authorName: "Patrick Nico", releaseYear: 1995 },
  { title: "Love is kind", authorName: "Faith Alo", releaseYear: 2010 },
  { title: "Why hate?", authorName: "Alomaja", releaseYear: 1944 },
];

const sortByYear = (bookOne, bookTwo) => {
  if (bookOne.releaseYear < bookTwo.releaseYear) {
    return -1;
  } else if (bookOne.releaseYear > bookTwo.releaseYear) {
    return 1;
  } else {
    return 0;
  }
};

const filteredBooks = books.filter((book) => book.releaseYear > 1950);
filteredBooks.sort(sortByYear);

console.log(filteredBooks);

// Alternate Combined Approach
const filteredBooksCombined = (books) => {
  return books
    .filter((book) => book.releaseYear > 1950)
    .sort((bookOne, bookTwo) => {
      if (bookOne.releaseYear < bookTwo.releaseYear) return -1;
      if (bookOne.releaseYear > bookTwo.releaseYear) return 1;
      return 0;
    });
};

console.log(filteredBooksCombined(books));
```

## Sample Output

Given the input data, the script outputs:

```javascript
[
  { title: "Golden Eggs", authorName: "Patrick Nico", releaseYear: 1995 },
  { title: "The gods must be crazy", authorName: "Tobs Henry", releaseYear: 2002 },
  { title: "Love is kind", authorName: "Faith Alo", releaseYear: 2010 }
]
```

## Usage

1. Copy the code into a JavaScript environment such as Node.js or a browser console.
2. Modify the `books` array to include your desired book data.
3. Run the script to see the filtered and sorted books.

## Design Choices

* The code uses separate filter and sort operations for clarity and reusability.
* An alternate combined approach is provided for scenarios where conciseness is preferred.

## Dependencies

* No external libraries or dependencies are required. This is a pure JavaScript implementation.

## License

This project is licensed under the MIT License - feel free to use and modify it.

---
