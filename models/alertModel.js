import mongoose from "mongoose";

const alertSchema =  new mongoose.Schema({
    timestamp : {
        type : Date,
        required : true
    },
    location_type : {
        type : String,
        required : true
    },
    vehicle_ids : [{
        type : String,
        required : true
    }]
});

const AlertModel = mongoose.model('Alert', alertSchema);

export default AlertModel;