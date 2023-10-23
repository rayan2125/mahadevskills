import Trainings from "../models/Training.js"



class TrainingController {
    static traingCreate = async (req, res) => {
      const { training_name,about_training} = req.body
    
        // console.log("img",req)
      const { user } = req
  
      if (training_name && about_training) {
       
        try {
          const traininginfo = new Trainings({
            training_name: training_name,
            about_training:about_training,
            is_active: "1",
           
            image: req.file.filename,
           
            usreId: user._id,
  
  
          })
  
          traininginfo.save()
  
          res.status(201).send({ "status": "success", "message": "Training Create successfully", })
  
        } catch (error) {
        //    console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Training Create  Unsuccessfully...", })
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "All Feild requires!!" })
      }
    }
  
    static trainglist = async (req, res) => {
      var { pageLength,search } = req.body
      const { user } = req
  
      // console.log("user",user)
  
      // console.log(pageLength)
      try {
        
        const totalrecord=await Trainings.find({$and:[{is_active:1},{usreId:user._id}] })
        const listings = await Trainings.find({ $or: [{ training_name: { $regex: '^' + search + '', $options: 'i' } }],$and:[{is_active:1},{usreId:user._id}] },).select({usreId: 0}).limit(pageLength).sort({ name: 1 });
  
      
  
        res.status(201).send({"status": "success", "data":{"aadata":listings,totalrecord:totalrecord.length }})
      } catch (error) {
        res.status(400).send({ "meassage": "failed" })
  
      }
    }
  
    static traingUpdate = async (req, res) => {
        const { training_name,about_training,_id} = req.body
    
    
        // console.log("img",req)
      const { user } = req
  
      if (training_name && about_training) {
       
        try {
          const coursedatainfo = {
           
            training_name: training_name,
            about_training:about_training,
            is_active: "1",
           
            usreId: user._id,
  
  
          }
  
          const updatedTask = await Trainings.findByIdAndUpdate( _id,{$set:coursedatainfo}, { new: true });
  
  
          // slideinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Training Upadte successfully", })
  
        } catch (error) {
            // console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Training Update  Unsuccessfully...",})
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "All Feild requires!!" })
      }
    }
  
    static traingdelete = async (req, res) => {
      const {  is_active,_id} = req.body
    
        //   console.log("req",is_active,_id)
      const { user } = req
  
      if (is_active && _id) {
       
        try {
          const courseupdateinfo = {
           
    
            is_active: is_active,
           
  
  
          }
  
          const deleteTask = await Trainings.findByIdAndUpdate( _id,{$set:courseupdateinfo}, { new: true });
  
  
          // slideinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Training Delete successfully",})
  
        } catch (error) {
          //  console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Training Delete  Unsuccessfully...", })
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "Something Wents Wrong!!" })
      }
    }
  
  }
  
  export default TrainingController