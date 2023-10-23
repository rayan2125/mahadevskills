import Certificates from "../models/Certificate.js"

class CertificateController {
    static certificateCreate = async (req, res) => {
      const { title,} = req.body
    
        // console.log("img",req)
      const { user } = req
  
      if (title && req.file) {
       
        try {
          const certificateinfo = new Certificates({
            title: title,

            is_active: "1",
           
            image: req.file.filename,
           
            usreId: user._id,
  
  
          })
  
          certificateinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Certificate Create successfully", })
  
        } catch (error) {
        //    console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Certificate Create  Unsuccessfully...", })
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "All Feild requires!!" })
      }
    }
  
    static certificatelist = async (req, res) => {
      var { pageLength,search } = req.body
      const { user } = req
  
      // console.log("user",user)
  
      // console.log(pageLength)
      try {
        
        const totalrecord=await Certificates.find({$and:[{is_active:1},{usreId:user._id}] })
        const listings = await Certificates.find({ $or: [{ title: { $regex: '^' + search + '', $options: 'i' } }],$and:[{is_active:1},{usreId:user._id}] },).select({usreId: 0}).limit(pageLength).sort({ name: 1 });
  
      
  
        res.status(201).send({"status": "success", "data":{"aadata":listings,totalrecord:totalrecord.length }})
      } catch (error) {
        res.status(400).send({ "meassage": "failed" })
  
      }
    }
  
    static certificateUpdate = async (req, res) => {
        const { title,_id} = req.body
    
    
        // console.log("img",req)
      const { user } = req
  
      if (title && req.file) {
       
        try {
          const certificatedatainfo = {
           
            title: title,
            is_active: "1",
            image: req.file.filename,
           
            usreId: user._id,
  
  
          }
  
          const updatedTask = await Certificates.findByIdAndUpdate( _id,{$set:certificatedatainfo}, { new: true });
  
  
          // slideinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Cetificate Upadte successfully", })
  
        } catch (error) {
            // console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Cetificate Update  Unsuccessfully...",})
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "All Feild requires!!" })
      }
    }
  
    static certificatedelete = async (req, res) => {
      const {  is_active,_id} = req.body
    
        //   console.log("req",is_active,_id)
      const { user } = req
  
      if (is_active && _id) {
       
        try {
          const cetificateupdateinfo = {
           
    
            is_active: is_active,
           
  
  
          }
  
          const deleteTask = await Certificates.findByIdAndUpdate( _id,{$set:cetificateupdateinfo}, { new: true });
  
  
          // slideinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Certificate Delete successfully",})
  
        } catch (error) {
            // console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Certificate Delete  Unsuccessfully...", })
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "Something Wents Wrong!!" })
      }
    }
  
  }
  
  export default CertificateController