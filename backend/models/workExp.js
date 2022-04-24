import mongoose from 'mongoose';

const workExpSchema = mongoose.Schema({
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: String,
    companyName: String,
    certificateLink: URL,
    location: String,
    startDate: Date,
    endDate: Date,
    description: String,
});

export default workExpSchema;