import express from 'express';

import AlertModel from '../models/alertModel.js';

const alertRouter = express.Router();

alertRouter.get('/alerts',async(req,res)=>{
    try{
        await AlertModel.find().then((alerts)=>{
            if(alerts.length==0)
            {
                res.status(404).send("No alerts yet");
            }
            else
            {
                res.json(alerts);
            }
        }).catch((error)=>{
            res.status(500).send("Error in finding all alerts ",error.message);
        })
    }catch(error){
        res.status(500).send("Error in alerts route",error.message);
    }
});

alertRouter.get('/alert/:alert_id',async(req,res)=>{
    try{
        const alert = await AlertModel.findById(req.params.alert_id)
        if(!alert)
        {
            res.status(404).send("Alert not found");
        }
        else
        {
            res.json(alert);
        }
    }catch(error){
        res.status(500).send("Error in alert/:alert_id route",error.message);
    }
});

export default alertRouter;
