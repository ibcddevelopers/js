const kjv = require('./wholekjv.json')

Object.keys(kjv).forEach((book) => {
  // console.log(book)
  // console.log(kjv[book].chapters.length)
})

getVerse('Galatians', 3, 16)

function getVerse (book, chapter, verse) {
  console.log(kjv[book].chapters[chapter - 1].verses[verse - 1][verse])
}