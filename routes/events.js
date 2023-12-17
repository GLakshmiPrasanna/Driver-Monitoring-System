import express from 'express';

import EventModel from '../models/eventModel.js';

const eventRouter = express.Router();

eventRouter.get('/events',async(req,res)=>{
    try{
        await EventModel.find().then((events)=>{
            if(events.length==0)
            {
                res.status(404).send("No events added yet");
            }
            else
            {
                res.json(events);
            }
        }).catch((error)=>{
            res.status(500).send("Error in finding all events ",error.message);
        })
    }catch(error){
        res.status(500).send("Error in events route",error.message);
    }
});

eventRouter.post('/event',async(req,res)=>{
    try{
        const event = new EventModel(req.body);
        await event.save();
        res.json(event);
        console.log("Event saved successfully");
    }catch(error){
        res.status(500).send("Error while saving event"+error.message);
    }
});

export default eventRouter;