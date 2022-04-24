import resume from "../models/resume.js";

export const getAllResume = async (req, res) => {
  try {
    const resume = await resume.find({}).sort({ UpdatedAt: -1 });
    res.status(200).json(resume);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMyResume = async (req, res) => {
  try {
    const resume = await resume
      .find({ author: req.user.id })
      .sort({ UpdatedAt: -1 });
    res.status(200).json(resume);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getResumeById = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await resume.findOne({ _id: id });
    res.status(200).json(resume);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postResume = async (req, res) => {
  try {
    const {
      name,
      linkedin_link,
      github_link,
      email,
      phone,
      workExperience,
      projects,
      education,
      achievements,
      summary,
      other,
    } = req.body;
    var newResume = new resume({
      author: req.user.id,
      name: name,
      linkedin_link: linkedin_link,
      github_link: github_link,
      email: email,
      phone: phone,
      workExperience: workExperience,
      projects: projects,
      education: education,
      achievements: achievements,
      summary: summary,
      other: other,
    });
    await newResume.save();
    res.status(201).json(newResume);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateResume = async (req, res) => {
  const {
    linkedin_link,
    github_link,
    email,
    phone,
    workExperience,
    projects,
    education,
    achievements,
    summary,
    other,
  } = req.body;
  resume
    .updateOne(
      { author: req.user.id },
      {
        $set: {
          linkedin_link: linkedin_link,
          github_link: github_link,
          email: email,
          phone: phone,
          workExperience: workExperience,
          projects: projects,
          education: education,
          achievements: achievements,
          summary: summary,
          other: other,
        },
      }
    )
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Resume Updated",
        Resume: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export const deleteResumeById = async (req, res) => {
  const { id } = req.params;
  Resume.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Resume deleted",
        Resume: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
