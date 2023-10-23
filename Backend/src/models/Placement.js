import mongoose from "mongoose";


const Placement = mongoose.Schema({
    sr_no: {
        type: Number,
        unique: true,
      },
   

    is_active: {
        type: String,
        required: true
    },
 
    image: String,

    usreId: {

    }







})


// Define a pre-save hook to generate the sr_no


Placement.pre('save', async function () {
    if (!this.sr_no) {
      const count = await Placements.countDocuments({});
      this.sr_no = count + 1;
    }
  });


const Placements = mongoose.model("Placements", Placement)

export default Placements
