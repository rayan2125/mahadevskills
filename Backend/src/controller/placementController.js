import Placements from "../models/Placement.js"

class PlacementController {
    static placementCreate = async (req, res) => {
     
    
        // console.log("img",req)
      const { user } = req
  
      if (req.file) {
       
        try {
          const placementinfo = new Placements({
        

            is_active: "1",
           
            image: req.file.filename,
           
            usreId: user._id,
  
  
          })
  
          placementinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Placement Companies Create successfully", })
  
        } catch (error) {
        //    console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Placement Companies Create  Unsuccessfully...", })
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "All Feild requires!!" })
      }
    }
  
    static placementlist = async (req, res) => {
      var { pageLength,search } = req.body
      const { user } = req
  
      // console.log("user",user)
  
      // console.log(pageLength)
      try {
        
        const totalrecord=await Placements.find({$and:[{is_active:1},{usreId:user._id}] })
        const listings = await Placements.find({ $and:[{is_active:1},{usreId:user._id}] },).select({usreId: 0}).limit(pageLength).sort({ name: 1 });
  
      
  
        res.status(201).send({"status": "success", "data":{"aadata":listings,totalrecord:totalrecord.length }})
      } catch (error) {
        res.status(400).send({ "meassage": "failed" })
  
      }
    }
  
    static placementUpdate = async (req, res) => {
        const {_id} = req.body
    
    
        // console.log("img",req)
      const { user } = req
  
      if (req.file) {
       
        try {
          const placementdatainfo = {
           
           
            is_active: "1",
            image: req.file.filename,
           
            usreId: user._id,
  
  
          }
  
          const updatedTask = await Placements.findByIdAndUpdate( _id,{$set:placementdatainfo}, { new: true });
  
  
          // slideinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Placement Companies Upadte successfully", })
  
        } catch (error) {
            // console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Placement Companies  Unsuccessfully...",})
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "All Feild requires!!" })
      }
    }
  
    static placementdelete = async (req, res) => {
      const {  is_active,_id} = req.body
    
        //   console.log("req",is_active,_id)
      const { user } = req
  
      if (is_active && _id) {
       
        try {
          const placementupdateinfo = {
           
    
            is_active: is_active,
           
  
  
          }
  
          const deleteTask = await Placements.findByIdAndUpdate( _id,{$set:placementupdateinfo}, { new: true });
  
  
          // slideinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Placement Companies successfully",})
  
        } catch (error) {
            // console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Placement Companies  Unsuccessfully...", })
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "Something Wents Wrong!!" })
      }
    }
  
  }
  
  export default PlacementController