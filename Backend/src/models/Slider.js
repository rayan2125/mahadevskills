import mongoose from "mongoose";


const Slider = mongoose.Schema({
    sr_no: {
        type: Number,
        unique: true,
      },
    name:{
        type:String,
        required:true
    },

    is_active:{
        type:String,
        required:true
    },

     title_2: String,
     title_1:String,
     link:String,
     priority:Number,
     image:String,
    short_description:String,
    usreId:{
         
    }



        
   
  

})

// Define a pre-save hook to generate the sr_no


Slider.pre('save', async function () {
    if (!this.sr_no) {
      const count = await Sliders.countDocuments({});
      this.sr_no = count + 1;
    }
  });



const Sliders = mongoose.model("Sliders", Slider)

export default Sliders
