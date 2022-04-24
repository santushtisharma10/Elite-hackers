import jobs from "../models/jobs.js";

export const getJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await jobs.findOne({ _id: id });
    res.status(200).json(job);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getJobs = async (req, res) => {
  try {
    const job = await jobs.find({}).sort({ UpdatedAt: -1 });
    res.status(200).json(job);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postJob = async (req, res) => {
  try {
    const {
      role,
      company,
      logo,
      type,
      location,
      description,
      requirements,
      responsibilities,
    } = req.body;
    var newJob = new jobs({
      author: req.user.id,
      role: role,
      company: company,
      logo: logo,
      type: type,
      location: location,
      description: description,
      requirements: requirements,
      responsibilities: responsibilities,
    });
    await newJob.save();
    res.status(200).json(newJob);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateJob = async (req, res) => {
  const { role, type, location, description, requirements, responsibilities } =
    req.body;
  jobs
    .updateOne(
      { author: req.user.id },
      {
        $set: {
          role: role,
          type: type,
          location: location,
          description: description,
          requirements: requirements,
          responsibilities: responsibilities,
        },
      }
    )
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Job Updated",
        Job: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export const deleteJob = async (req, res) => {
    const { id } = req.params;
  jobs.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Job deleted",
        Job: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
