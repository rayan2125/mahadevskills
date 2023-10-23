import Courses from "../models/Course.js"

class CourseController {
    static courseCreate = async (req, res) => {
      const { course_name,about_course} = req.body
    
        // console.log("img",req)
      const { user } = req
  
      if (course_name && about_course) {
       
        try {
          const courseinfo = new Courses({
            course_name: course_name,
            about_course:about_course,
            is_active: "1",
           
            image: req.file.filename,
           
            usreId: user._id,
  
  
          })
  
          courseinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Course Create successfully", })
  
        } catch (error) {
        //    console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Course Create  Unsuccessfully...", })
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "All Feild requires!!" })
      }
    }
  
    static courselist = async (req, res) => {
      var { pageLength,search } = req.body
      const { user } = req
  
      // console.log("user",user)
  
      // console.log(pageLength)
      try {
        
        const totalrecord=await Courses.find({$and:[{is_active:1},{usreId:user._id}] })
        const listings = await Courses.find({ $or: [{ course_name: { $regex: '^' + search + '', $options: 'i' } }],$and:[{is_active:1},{usreId:user._id}] },).select({usreId: 0}).limit(pageLength).sort({ name: 1 });
  
      
  
        res.status(201).send({"status": "success", "data":{"aadata":listings,totalrecord:totalrecord.length }})
      } catch (error) {
        res.status(400).send({ "meassage": "failed" })
  
      }
    }
  
    static courseUpdate = async (req, res) => {
        const { course_name,about_course,_id} = req.body
    
    
        // console.log("img",req)
      const { user } = req
  
      if (course_name && about_course) {
       
        try {
          const coursedatainfo = {
           
            course_name: course_name,
            about_course:about_course,
            is_active: "1",
           
            usreId: user._id,
  
  
          }
  
          const updatedTask = await Courses.findByIdAndUpdate( _id,{$set:coursedatainfo}, { new: true });
  
  
          // slideinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Course Upadte successfully", })
  
        } catch (error) {
            // console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Course Update  Unsuccessfully...",})
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "All Feild requires!!" })
      }
    }
  
    static coursedelete = async (req, res) => {
      const {  is_active,_id} = req.body
    
        //   console.log("req",is_active,_id)
      const { user } = req
  
      if (is_active && _id) {
       
        try {
          const courseupdateinfo = {
           
    
            is_active: is_active,
           
  
  
          }
  
          const deleteTask = await Courses.findByIdAndUpdate( _id,{$set:courseupdateinfo}, { new: true });
  
  
          // slideinfo.save()
  
          res.status(201).send({ "status": "success", "message": "Course Delete successfully",})
  
        } catch (error) {
          //  console.log("error",error)
          res.status(400).send({ "status": "success", "message": "Course Delete  Unsuccessfully...", })
        }
  
      } else {
        res.status(401).send({ "status": "fail", "message": "Something Wents Wrong!!" })
      }
    }
  
  }
  
  export default CourseController