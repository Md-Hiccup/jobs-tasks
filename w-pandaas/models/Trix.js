var mongoose = require('mongoose');
var TrixSchema = new mongoose.Schema({
    content : String
})

module.exports = mongoose.model('Trix', TrixSchema);