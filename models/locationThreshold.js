import mongoose from "mongoose";

const locationThresholdSchema = new mongoose.Schema({
    location_type : {
        type : String,
        unique : true,
        required : true
    },
    threshold : {
        type : Number,
        required : true
    }
})

const LocationThresholdModel = mongoose.model('LocationThresholdMapping',locationThresholdSchema);


const locationThresholdMapping=[
    {
        location_type : 'highway',
        threshold : 4
    },
    {
        location_type : 'city_center',
        threshold : 3
    },
    {
        location_type : 'commercial',
        threshold : 2
    },
    {
        location_type : 'residential',
        threshold : 1
    }
];

LocationThresholdModel.find().then((found)=>{
    if(found.length==0)
    {
        LocationThresholdModel.insertMany(locationThresholdMapping).then(()=>{
            console.log('Threshold values inserted successfully');
        }).catch((error)=>{
            console.log(error.message);
        })
    }
    else{
        console.log('Threshold values exists');
    }
}).catch((error)=>{
    console.log(error.message);
})

export default LocationThresholdModel;