mongoose = require('mongoose');
url = 'mongodb://localhost:27017/mBusiness_DB';

const authorSchema = new mongoose.Schema({name: 'string', biography: 'string'});
const Author = mongoose.model('Author', authorSchema);
const authorData = new Author({name: "Anas", biography: "SE Student"});

mongoose.connect(url,function (error) {
    if (error) throw error;
    authorData.save(function (err) {
        if (err) throw err;
        console.log("saved")
        mongoose.connection.close().then(r => console.log("closed!"));

    })
    /*Author.insertMany(authorData, function (err) {
        if (err) throw err;
        console.log("saved")
        mongoose.connection.close().then(r => console.log("closed!"));
    })*/
})
