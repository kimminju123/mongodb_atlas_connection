import express, { Router } from "express";
import Model from "../model"

const routes = express.Router();

routes.post("/post", async (req,res)=>{
    const data = new Model({
        name: req.body.name,
        age: req.body.age,
    });
    console.log(`넘어온값은?${JSON.stringify(data)}`);
    try{
        const dataToSave = await data.save();
        console.log(`저장된값은?${JSON.stringify(dataToSave)}`)
        res.status(200),json(dataToSave);
    } catch(error){
        res.status(400).json({message: error.message});
    }
})
export default router;