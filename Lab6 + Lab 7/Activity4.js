mongoose = require('mongoose');
url = 'mongodb://localhost:27017/mBusiness_DB';
authorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        firstName: {type: String},
        lastName: {type: String}
    },
    biography: String,
    twitter: String,
    facebook: String,
    profilePicture: String,
    booksList: [String]
});
bookSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
});

Author = mongoose.model('Author', authorSchema);
Book = mongoose.model('Book', bookSchema)

let authorData = new Author({
    _id : new mongoose.Types.ObjectId,
    name:{
        firstName: "Aseed",
        lastName: "Ali Khokhar"
    },
    biography: "Final Year Student",
    twitter: "aseedk99",
    facebook: "aseedk",
    profilePicture: "nop",
    bookList: ["A1", "A2"]
});

let bookData = new Book({
   _id: new mongoose.Types.ObjectId(),
   title: "A Book",
   author: authorData._id
});

/*mongoose.connect(url, function (err) {
    if (err) throw err;
    authorData.save(function (err) {
        if (err) throw err;
        console.log("Author Inserted");
        bookData.save(function (err) {
            if (err) throw  err;
            console.log("Book Saved");
            mongoose.connection.close().then(r => console.log(r))
        })
    })
});*/
mongoose.connect(url, function (err) {
    Book.find({title: "A Book"}).
    populate({path: 'author', select: 'name biography'}).
    exec(function (error, result) {
        console.log(result[0].author);
        mongoose.connection.close();
    })
});
