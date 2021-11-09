mongoose = require('mongoose');
url = 'mongodb://localhost:27017/mBusiness_DB';

interneeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    internee_id: String,
    year: Number,
    batch: String,
    month: Number
});

Internee = mongoose.model('Internee', interneeSchema);

mongoose.connect(url, function (err) {
    if (err) throw err;
    Internee.aggregate([{
        $match: {batch: 'A'}
        },
        {
            $group: {_id: "$internee_id", total: {$sum: "$months"}}
        },
        {
            $sort: {total: -1}
        }]).exec(function (error, result) {
        if (error) throw error;
        console.log(result);
        mongoose.connection.close().then(r => console.log("closed"))
    })
})
