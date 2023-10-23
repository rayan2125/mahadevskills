import Sliders from "../models/Slider.js";


class SlidersController {
  static slideCreate = async (req, res) => {
    const { name, is_active, title_2, title_1, priority, short_description } = req.body
  
      // console.log("img",req)
    const { user } = req

    if (name && is_active && title_1 && title_2 && priority && short_description) {
     
      try {
        const slideinfo = new Sliders({
          name: name,
          is_active: is_active,
          title_2: title_2,
          title_1: title_1,
          priority: priority,
          short_description: short_description,
          image: req.file.filename,
          usreId: user._id,


        })

        slideinfo.save()

        res.status(201).send({ "status": "success", "message": "Slider Craete successfully", })

      } catch (error) {
        // console.log("error",error)
        res.status(400).send({ "status": "success", "message": "Slider Craete  Unsuccessfully...", })
      }

    } else {
      res.status(401).send({ "status": "fail", "message": "All Feild requires!!" })
    }
  }

  static slidelist = async (req, res) => {
    var { pageLength,search } = req.body
    const { user } = req

    // console.log("user",user)

    // console.log(pageLength)
    try {
      
      const totalrecord=await Sliders.find({$and:[{is_active:1},{usreId:user._id}] })
      const listings = await Sliders.find({ $or: [{ name: { $regex: '^' + search + '', $options: 'i' } }],$and:[{is_active:1},{usreId:user._id}] },).select({usreId: 0}).limit(pageLength).sort({ name: 1 });

    

      res.status(201).send({"status": "success", "data":{"aadata":listings,totalrecord:totalrecord.length }})
    } catch (error) {
      res.status(400).send({ "meassage": "failed" })

    }
  }

  static slideUpdate = async (req, res) => {
    const { name, is_active, title_2, title_1, priority, short_description,_id} = req.body
  
      // console.log("img",req)
    const { user } = req

    if (name && is_active && title_1 && title_2 && priority && short_description) {
     
      try {
        const slideupdateinfo = {
         
          name: name,
          is_active: is_active,
          title_2: title_2,
          title_1: title_1,
          priority: priority,
          short_description: short_description,
          image: req.file.filename,
          usreId: user._id,


        }

        const updatedTask = await Sliders.findByIdAndUpdate( _id,{$set:slideupdateinfo}, { new: true });


        // slideinfo.save()

        res.status(201).send({ "status": "success", "message": "Slider Upadte successfully", })

      } catch (error) {
        //  console.log("error",error)
        res.status(400).send({ "status": "success", "message": "Slider Update  Unsuccessfully...",})
      }

    } else {
      res.status(401).send({ "status": "fail", "message": "All Feild requires!!" })
    }
  }

  static sliderdelete = async (req, res) => {
    const {  is_active,_id} = req.body
  
      //  console.log("req",is_active,_id)
    const { user } = req

    if (is_active && _id) {
     
      try {
        const slideupdateinfo = {
         
  
          is_active: is_active,
         


        }

        const deleteTask = await Sliders.findByIdAndUpdate( _id,{$set:slideupdateinfo}, { new: true });


        // slideinfo.save()

        res.status(201).send({ "status": "success", "message": "Slider Delete successfully",})

      } catch (error) {
        //  console.log("error",error)
        res.status(400).send({ "status": "success", "message": "Slider Delete  Unsuccessfully...", })
      }

    } else {
      res.status(401).send({ "status": "fail", "message": "Something Wents Wrong!!" })
    }
  }

}

export default SlidersController

