import mongoose from 'mongoose';

const educationSchema = mongoose.Schema({
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: String,
    institute: String,
    startDate: Date,
    endDate: Date,
});

export default educationSchema;