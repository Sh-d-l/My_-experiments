import express, {Response,Request,NextFunction} from 'express';
//import express from "express"
const app = express();
const port = 5000;
app.use(express.json())
import {testRouter} from "./videos_router/videos_router";
app.use("/videos",testRouter)

const middleWare = (req:Request,res:Response,next:NextFunction) => {
    //@ts-ignore
    req.bla = "hello"
        next();
}
const authGuard = (req:Request,res:Response,next:NextFunction) => {
    if(req.query.token === "123") {
        next()
    }
    else {
        res.status(400).send("verification failed")
    }
}
app.use(middleWare)
app.use(authGuard)
app.get('/videos', (req,res)=> {
    // @ts-ignore
    const bla =req.bla;
    res.send({value:bla +"!!!"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
