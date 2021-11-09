MongoClient = require('mongodb').MongoClient;
ObjectId = require('mongodb').ObjectId;
url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db('mydb');
    dbo.collection('students').aggregate([
        {
            $match :{ section: "A"}
        },
        {
            $group : {_id: "$student_id", total_fee: {$sum: "$course_fee"}}
        },
        {
            $sort : {course_fee: -1}
        }
        ]).toArray(function (error, result) {
            if (error) throw error;
            console.log(result);
    })
})
