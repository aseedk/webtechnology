mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mBusiness_DB', function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});
