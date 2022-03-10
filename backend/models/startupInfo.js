import mongoose from "mongoose"

const startupSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
    
},{timestamps: true})

export default mongoose.model('Startup', startupSchema)