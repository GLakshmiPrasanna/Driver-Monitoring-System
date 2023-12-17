import EventModel from './models/eventModel.js';
import AlertModel from './models/alertModel.js';
import LocationThresholdModel from './models/locationThreshold.js';



const ruleEngine = async()=>{
    console.log("ruleEngine called");
    try{
        const locationThresholds = await LocationThresholdModel.find();
        const conditions = {};

        locationThresholds.forEach((locationThreshold)=>{
            conditions[locationThreshold.location_type] = {
                threshold: locationThreshold.threshold
            };
        });

        const curTime = new Date();
        const prevTime = new Date(curTime - 5*60*1000);
        console.log('curTime: ' + curTime+', prevTime: '+prevTime);
        for(const location in conditions)
        {
            const {threshold} = conditions[location];

            const unsafeEvents = await EventModel.countDocuments({
                location_type : location,
                timestamp : {$gte : prevTime , $lte : curTime},
                is_driving_safe : false
            });
            console.log("threshold: ", threshold);
            console.log("unsafeEvents: ", unsafeEvents);
            if(unsafeEvents >= threshold)
            {
                const isGenerated = await AlertModel.findOne({
                    location_type : location,
                    timestamp : {$gte : prevTime, $lte : curTime}
                });

                if(!isGenerated)
                {
                    const vehicleIds = await EventModel.distinct('vehicle_id',{
                        location_type : location,
                        timestamp : {$gte : prevTime, $lte : curTime},
                        is_driving_safe : false
                    });

                    const alert = new AlertModel({
                        timestamp : curTime,
                        location_type : location,
                        vehicle_ids : vehicleIds
                    });

                    await alert.save();
                    console.log("New alert saved successfully");
                }
            }
        }
    }catch(error){
        console.log("Error in ruleEngine\n",error.message);
    }
}

export default ruleEngine;