import checkUserAuth from "../middleware/authmiddleware.js";
import express from "express";
import Upload from "../config/fileupload.js";
import TeamController from "../controller/teamController.js";

const routerteam=express.Router()

///token auth
routerteam.use('/create',checkUserAuth);
routerteam.use('/list',checkUserAuth);
routerteam.use('/update',checkUserAuth);
routerteam.use('/delete',checkUserAuth);


///Api url 

routerteam.post("/create",Upload.single("image"),TeamController.teamCreate)
routerteam.post("/update",Upload.single("image"),TeamController.teamUpdate)
routerteam.post("/delete",TeamController.teamdelete)
routerteam.post("/list",TeamController.teamlist)

export default routerteam
