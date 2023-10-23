import mongoose from "mongoose";


const Course = mongoose.Schema({
    sr_no: {
        type: Number,
        unique: true,
      },
    course_name: {
        type: String,
        required: true
    },

    is_active: {
        type: String,
        required: true
    },


    about_course: {
        type: String,
        required: true
    },

   
    image: String,

    usreId: {

    }







})


// Define a pre-save hook to generate the sr_no


Course.pre('save', async function () {
    if (!this.sr_no) {
      const count = await Courses.countDocuments({});
      this.sr_no = count + 1;
    }
  });


const Courses = mongoose.model("Courses", Course)

export default Courses
