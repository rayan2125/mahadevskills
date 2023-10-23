import mongoose from "mongoose";


const Training = mongoose.Schema({
    sr_no: {
        type: Number,
        unique: true,
      },
      training_name: {
        type: String,
        required: true
    },

    is_active: {
        type: String,
        required: true
    },


    about_training: {
        type: String,
        required: true
    },

   
    image: String,

    usreId: {

    }







})


// Define a pre-save hook to generate the sr_no


Training.pre('save', async function () {
    if (!this.sr_no) {
      const count = await Trainings.countDocuments({});
      this.sr_no = count + 1;
    }
  });


const Trainings = mongoose.model("Trainings", Training)

export default Trainings
