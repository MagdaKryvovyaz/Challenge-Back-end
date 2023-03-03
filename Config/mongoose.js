const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Magda:test1234567890@cluster0.moy6ox8.mongodb.net/test')
    .then (result => console.log('connect to DB'))
    .catch (err => console.log(err))