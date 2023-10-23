import checkUserAuth from "../middleware/authmiddleware.js";
import express from "express";
import Upload from "../config/fileupload.js";
import CertificateController from "../controller/certificateController.js";

const routercertificate=express.Router()

///token auth
routercertificate.use('/create',checkUserAuth);
routercertificate.use('/list',checkUserAuth);
routercertificate.use('/update',checkUserAuth);
routercertificate.use('/delete',checkUserAuth);


///Api url 

routercertificate.post("/create",Upload.single("image"),CertificateController.certificateCreate)
routercertificate.post("/update",Upload.single("image"),CertificateController.certificateUpdate)
routercertificate.post("/delete",CertificateController.certificatedelete)
routercertificate.post("/list",CertificateController.certificatelist)

export default routercertificate
