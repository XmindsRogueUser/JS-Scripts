// Create an array of objects, where each object describes a book and has properties for the title (a string),
// author (a string), and alreadyRead (a boolean indicating if you read it yet).Iterate through the array of 
// books. For each book, output depending on whether you read it yet or not. If you read it, log a string like
// 'You already read "Two States" by "Chethan Bhagat" , and if not, log a string like 'You still need to read 
// "Grand Ma's bag of Stories" by "Sudha Murthy."  

var library = [ 
    {
   title: 'The India Story',
   author: 'Bimal Jalal',
   alreadyread : false
   },
  {
   title: "Grand Ma's bag of Stories",
   author : "Sudgha Murthy",
   alreadyread : false
   },
  {
   title: "Two States",
   author : "Chethan Bhagat",
   alreadyread : true
  },
 {
   title: "Lal Salam",
   author: "Smriti Irani",
   alreadyread: true
 },
 {
   title: "Mockingjay: The Final Book of The Hunger Games",
   author: "Suzanne Collins",
   alreadyread: false
 }];

 function doStuff(value) {
    if (value.alreadyread)
        console.log("You already read " + value.title + " by " + value.author)
    else
        console.log("You still need to read " + value.title + " by " + value.author)
 }

 library.forEach(doStuff);
