import checkUserAuth from "../middleware/authmiddleware.js";
import express from "express";
import Upload from "../config/fileupload.js";
import SlidersController from "../controller/sliderControlleer.js";

const routerslider=express.Router()

///token auth
routerslider.use('/create',checkUserAuth);
routerslider.use('/list',checkUserAuth);
routerslider.use('/update',checkUserAuth);
routerslider.use('/delete',checkUserAuth);


///Api url 

routerslider.post("/create",Upload.single("image"),SlidersController.slideCreate)
routerslider.post("/update",Upload.single("image"),SlidersController.slideUpdate)
routerslider.post("/delete",SlidersController.sliderdelete)
routerslider.post("/list",SlidersController.slidelist)

export default routerslider
