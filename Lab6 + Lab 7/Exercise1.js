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
const Author = mongoose.model('Author', authorSchema);
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
    bookList: ["The Alchemist", "Around the world in 80 days"]
});
mongoose.connect(url, function (err) {
    if (err) throw err;
    authorData.save(function (err) {
        if (err) throw err;
        console.log("Saved!");
        mongoose.connection.close().then(r => console.log(r))
    })
})
