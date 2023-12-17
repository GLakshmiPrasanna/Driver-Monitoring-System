import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    timestamp:{
        type : Date,
        default : Date.now,
        required: true
    },
    is_driving_safe: {
        type : Boolean,
        required: true
    },
    vehicle_id: {
        type : String,
        required: true
    },
    location_type: {
        type : String,
        required: true
    }
});

const EventModel = mongoose.model('Event',eventSchema);
export default EventModel;