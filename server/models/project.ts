//var mongoose = require('mongoose');
import * as mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    quoteId: {type: mongoose.Schema.Types.ObjectId, ref: 'Quote'},
    name: String,
    quote_date: { type: Date, default: Date.now },
    scopeDetail: String,
    projectInfo: String,
    address: {
        address1: String,
        address2: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    },
    sightType: String,
    contractor: String,
    employeeType: String,
    employees: [String],
    cost: String,
    manager: String,
    startDate: Date,
    status:String,
    subcontractor:String,

});

const Project = mongoose.model('project', projectSchema);
export default Project;
