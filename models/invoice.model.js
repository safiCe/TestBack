const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
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

const invoice = mongoose.model("invoice", invoiceSchema);

module.exports = invoice;