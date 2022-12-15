const express = require('express')
const route = require('./routes/router.js')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())

mongoose.connect("mongodb+srv://functionup:K3OCHkFxsJsV53MA@cluster0.e4rwd2y.mongodb.net/group45-DB", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use(route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});