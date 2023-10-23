import mongoose from "mongoose";


const Certificate = mongoose.Schema({
    sr_no: {
        type: Number,
        unique: true,
      },
    title: {
        type: String,
        required: true
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


Certificate.pre('save', async function () {
    if (!this.sr_no) {
      const count = await Certificates.countDocuments({});
      this.sr_no = count + 1;
    }
  });


const Certificates = mongoose.model("Certificates", Certificate)

export default Certificates
