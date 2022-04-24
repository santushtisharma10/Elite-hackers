import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    role: { type: String, required: true },
    company: String,
    logo: URL,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    applicants: Number,
    UpdatedAt: {
        type: Date,
        default: Date.now
    },
    type: String,
    location: String,
    description: String,
    requirements: String,
    responsibilities: String,
});

export default mongoose.model('Jobs', jobSchema);