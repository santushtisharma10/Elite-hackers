import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: String,
    overview: String,
    deployedLink: URL,
    githubLink: URL,
    description: String,
});

export default projectSchema;