//var mongoose = require('mongoose');
import * as mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    name: String,
    date: { type: Date, default: Date.now },
    outcome: String,
    quoteId: String,
    comment: String,
    cost: [{
        cost: Number,
        heading: String,
        _id: false
    }],
    totalCost: Number,
    tender: String,
    email: String,
    details: String,
    gstCost: Number,
    quoteReason: String,
    scopeDetail: String,
    externalSubstrate: String,
    internalSubstrate: String,
    costHeading: String,
});

quoteSchema.pre('save', function (next) {
    // do stuff
    var date = new Date();
    var components = [
        date.getDate(),
        date.getMonth(),
        date.getFullYear(),
        Math.floor(1000 + Math.random() * 9000)
    ];
    const quote = this;
    quote.quoteId = components.join("");
    console.log('quote saved', this);
    next();
});

const Quote = mongoose.model('Quote', quoteSchema);
export default Quote;
