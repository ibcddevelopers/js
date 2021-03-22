const kjv = require('./wholekjv.json')

Object.keys(kjv).forEach((book) => {
  console.log(book)
  console.log(kjv[book].chapters.length)
})