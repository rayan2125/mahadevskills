import checkUserAuth from "../middleware/authmiddleware.js";
import express from "express";
import Upload from "../config/fileupload.js";
import PlacementController from "../controller/placementController.js";

const routerplacement=express.Router()

///token auth
routerplacement.use('/create',checkUserAuth);
routerplacement.use('/list',checkUserAuth);
routerplacement.use('/update',checkUserAuth);
routerplacement.use('/delete',checkUserAuth);


///Api url 

routerplacement.post("/create",Upload.single("image"),PlacementController.placementCreate)
routerplacement.post("/update",Upload.single("image"),PlacementController.placementUpdate)
routerplacement.post("/delete",PlacementController.placementdelete)
routerplacement.post("/list",PlacementController.placementlist)

export default routerplacement
