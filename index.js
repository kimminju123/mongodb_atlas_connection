import express from "express";
import mongoose from "mongoose";
import path from "path";
import routes from "./routes/routes.js";

console.log('자 몽고db에 접속해 볼까?');
mongoose
    .connect(
        'mongodb+srv://shindalsoo:sds9050%40%23!@zi0you.zkjwmfy.mongodb.nat/myFirstDatabase?authSource=admin'
    )
    .then(()=>{
        console.log("몽고db아틀라스 나의 계정 접속");
    })
    .catch((e)=>{
        console.log(e);
    })
    const app = express();

    app.use(express.json());
    app.use("/api", routes);
    app.get("/", (req, res)=>{
        res.sendFile(path.resolve("index.html"));
    })

    app.listen(8088, ()=>{
        console.log(`웹서버 시작 http://localhost:${8088}`);s
    })