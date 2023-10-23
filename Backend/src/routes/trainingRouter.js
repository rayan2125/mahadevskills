import checkUserAuth from "../middleware/authmiddleware.js";
import express from "express";
import Upload from "../config/fileupload.js";
import TrainingController from "../controller/TrainingController.js";

const routertraining=express.Router()

///token auth
routertraining.use('/create',checkUserAuth);
routertraining.use('/list',checkUserAuth);
routertraining.use('/update',checkUserAuth);
routertraining.use('/delete',checkUserAuth);


///Api url 

routertraining.post("/create",Upload.single("image"),TrainingController.traingCreate)
routertraining.post("/update",Upload.single("image"),TrainingController.traingUpdate)
routertraining.post("/delete",TrainingController.traingdelete)
routertraining.post("/list",TrainingController.trainglist)

export default routertraining
