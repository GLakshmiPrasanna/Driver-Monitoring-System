import express from "express";
import mongoose from "mongoose";
import eventRouter from './routes/events.js';
import alertRouter from './routes/alerts.js';
import ruleEngine from './ruleEngine.js';

mongoose.connect('mongodb://127.0.0.1:27017/driverMonitoringSystem');

const app=express();

app.use(express.json());

app.use('/',eventRouter);

app.use('/',alertRouter);

setInterval(ruleEngine, 5*60*1000);

app.listen(3000,()=>{
    console.log("Server started!!");
})