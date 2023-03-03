const moment = require('moment')
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const FEED = new Schema ({
    name: {
        type: String,
        required: [true, 'You need to write your name'],
        maxLength: [15, 'Name must be no longer than 25 character']
    }, 
    message: {
        type: String,
        required: [true, 'You need to write your message'],
        maxLength: [40, 'Message must be no longer than 40 character']
    },
    created_at: {
        type: String, 
        default:  moment(Date.now()).format('llll'),
    }
}, {timestamps: true})
 
const Feed = mongoose.model('Blog', FEED);

module.exports = Feed