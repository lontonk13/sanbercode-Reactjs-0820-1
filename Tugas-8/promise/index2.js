var readBooksPromise = require('./promise.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000}
]

function buku()
{
    readBooksPromise(10000, books[0])
    .then(function(x) {
        readBooksPromise(x, books[1])x
        .then(function(x) {
            readBooksPromise(x, books[2])
        })
    })
    .catch(function(x) {
        console.log(x)
    })
}x
buku();
