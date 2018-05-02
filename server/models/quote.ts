//var mongoose = require('mongoose');
import * as mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    name: String,
    date: { type: Date, default: Date.now },
    outcome: String,

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

const Quote = mongoose.model('Quote', quoteSchema);
export default Quote;
