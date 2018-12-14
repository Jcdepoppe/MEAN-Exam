var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/pets');

const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "You must enter the pets name!"], minlength: [3, "The pets name must be at least 3 characters"], unique: [true, "This pet already exists in the shelter! Please choose a new name"], uniqueCaseInsensitive: [true, "This pet already exists in the shelter! Please choose a new name"]},
    type: {type: String, required: true, minlength: 3},
    description: {type: String, required: true, minlength: 3},
    likes: {type: Number},
    skillOne: {type: String},
    skillTwo: {type: String},
    skillThree: {type: String},
}, {timestamps: true});

PetSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Pets", PetSchema);