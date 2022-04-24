import mongoose from 'mongoose';
import workExp from "./workExp.js";
import project from './project.js';
import education from './education.js';

const resumeSchema = new mongoose.Schema({
    name: String,
    linkedin_link: String,
    github_link: String,
    email: String,
    phone: String,
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

export default mongoose.model('Resume', resumeSchema);