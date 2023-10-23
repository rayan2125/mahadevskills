import checkUserAuth from "../middleware/authmiddleware.js";
import express from "express";
import Upload from "../config/fileupload.js";
import CourseController from "../controller/courseController.js";

const routercourse=express.Router()

///token auth
routercourse.use('/create',checkUserAuth);
routercourse.use('/list',checkUserAuth);
routercourse.use('/update',checkUserAuth);
routercourse.use('/delete',checkUserAuth);


///Api url 

routercourse.post("/create",Upload.single("image"),CourseController.courseCreate)
routercourse.post("/update",Upload.single("image"),CourseController.courseUpdate)
routercourse.post("/delete",CourseController.coursedelete)
routercourse.post("/list",CourseController.courselist)

export default routercourse
