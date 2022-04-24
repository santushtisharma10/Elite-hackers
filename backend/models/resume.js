import mongoose from 'mongoose';
import workExp from "./workExp";
import project from './project';
import education from './education';

const jobSchema = new mongoose.Schema({
    title: String,
    name: String,
    linkedin_link: URL,
    github_link: URL,
    email: email,
    phone: phone,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    UpdatedAt: {
        type: Date,
        default: Date.now
    },
    workExperience: [workExp],
    projects: [project],
    education: [education],
    achievements: [{
        type: String
    }],
    summary: String,
    other: String,
});

export default mongoose.model('Jobs', jobSchema);