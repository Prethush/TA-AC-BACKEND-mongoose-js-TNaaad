let express = require('express');
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sample',{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log(err ? err : "coonected to db");
})

let app = express();

app.listen(3000, () => {
    console.log('Server is on port 3k');
});