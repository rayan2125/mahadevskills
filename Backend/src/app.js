import express from 'express'
import './db/connection.js'
dotenv.config()
import userRoute from './routes/userRouter.js'
import routerslider from './routes/sliderRouter.js'
import routerteam from './routes/teamRouter.js'
import routercourse from './routes/courseRouter.js'
import routercertificate from './routes/certificateRouter.js'
import routerplacement from './routes/placementRoute.js'
import routertraining from './routes/trainingRouter.js'
import dotenv from 'dotenv'
import cors from "cors"
// var cors = require('cors');



const app = express()
app.use(express.json())
app.use(cors())
// app.use(bodyParser.urlencoded({ extended : true }));

app.use("/api/user",userRoute)
app.use('/upload', express.static('./upload'));
app.use("/api/slider",routerslider)
app.use("/api/team",routerteam)
app.use("/api/course",routercourse)
app.use("/api/training",routertraining)
app.use("/api/certificate",routercertificate)
app.use("/api/placement-companies",routerplacement)



app.listen(8000,()=>{
    console.log("server listen at 8000")

})