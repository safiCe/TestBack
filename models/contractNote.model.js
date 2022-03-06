const mongoose = require("mongoose");

const contractNoteSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "customer",
        required: true
    },
    products:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    }
});

const contractNote = mongoose.model("contractNote", contractNoteSchema);

module.exports = contractNote;