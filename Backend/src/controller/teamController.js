import Teams from "../models/Team.js"

class TeamController {
    static teamCreate = async (req, res) => {
      const { name, designation,address} = req.body
    
        // console.log("img",req)
      const { user } = req
  
      if (name && designation) {
       
        try {
          const teaminfo = new Teams({
            name: name,
            is_active: "1",
            designation:designation,
            image: req.file.filename,
            address:address,
            usreId: user._id,
  
  
          })
  
          teaminfo.save()
  
          res.status(201).send({ "status": "success", "message": "Team Craete successfully", })
  
        } catch (error) {
           console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Team Craete  Unsuccessfully...", })
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "All Feild requires!!" })
      }
    }
  
    static teamlist = async (req, res) => {
      var { pageLength,search } = req.body
      const { user } = req
  
      // console.log("user",user)
  
      // console.log(pageLength)
      try {
        
        const totalrecord=await Teams.find({$and:[{is_active:1},{usreId:user._id}] })
        const listings = await Teams.find({ $or: [{ name: { $regex: '^' + search + '', $options: 'i' } }],$and:[{is_active:1},{usreId:user._id}] },).select({usreId: 0}).limit(pageLength).sort({ name: 1 });
  
      
  
        res.status(201).send({"status": "success", "data":{"aadata":listings,totalrecord:totalrecord.length }})
      } catch (error) {
        res.status(400).send({ "meassage": "failed" })
  
      }
    }
  
    static teamUpdate = async (req, res) => {
        const { name, designation,address,_id} = req.body
    
    
        // console.log("img",req)
      const { user } = req
  
      if (name && designation) {
       
        try {
          const teamdateinfo = {
           
            name: name,
            is_active: "1",
            designation:designation,
            address:address,
            usreId: user._id,
  
  
          }
  
          const updatedTask = await Teams.findByIdAndUpdate( _id,{$set:teamdateinfo}, { new: true });
  
  
          // slideinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Team Upadte successfully", })
  
        } catch (error) {
            // console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Team Update  Unsuccessfully...",})
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "All Feild requires!!" })
      }
    }
  
    static teamdelete = async (req, res) => {
      const {  is_active,_id} = req.body
    
        //   console.log("req",is_active,_id)
      const { user } = req
  
      if (is_active && _id) {
       
        try {
          const teamupdateinfo = {
           
    
            is_active: is_active,
           
  
  
          }
  
          const deleteTask = await Teams.findByIdAndUpdate( _id,{$set:teamupdateinfo}, { new: true });
  
  
          // slideinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Team Delete successfully",})
  
        } catch (error) {
          //  console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Team Delete  Unsuccessfully...", })
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "Something Wents Wrong!!" })
      }
    }
  
  }
  
  export default TeamController