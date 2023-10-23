import mongoose from "mongoose";
import { Sequelize } from "sequelize";

const Team = mongoose.Schema({
     
    sr_no: {
        type: Number,
        unique: true,
      },
    name: {
        type: String,
        required: true
    },

    is_active: {
        type: String,
        required: true
    },


    designation: {
        type: String,
        required: true
    },

    address:{
        type: String,
    },

    image: String,

    usreId: {

    }







})


// Define a pre-save hook to generate the sr_no


Team.pre('save', async function () {
    if (!this.sr_no) {
      const count = await Teams.countDocuments({});
      this.sr_no = count + 1;
    }
  });

const Teams = mongoose.model("Teams", Team)

export default Teams
