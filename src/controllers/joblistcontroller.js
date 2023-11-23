import * as jobService from "../services/joblistservice.js";

export const create = async (req, res) => {
  const jobData = req.body;

  try {
    const createdJob = await jobService.createJob(jobData);
    res.status(200).json(createdJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const read = async (req, res) => {
  try {
    const allJobs = await jobService.getAllJobs();
    res.json(allJobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const readone = async (req, res) => {
  const jobId = parseInt(req.params.jobid);

  try {
    const job = await jobService.getJobById(jobId);

    if (job == null) {
      res.status(404).json({ error: 'Job not found.' });
    } else {
      res.json(job);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const update = async (req, res) => {
  const jobId = parseInt(req.params.jobid);
  const jobData = req.body;

  try {
    const updatedJob = await jobService.updateJob(jobId, jobData);
    if (updatedJob == null) {
      res.status(404).json({ error: 'Job not found.' });
    } else {
      res.json(updatedJob);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deletejob = async (req, res) => {
  const jobId = parseInt(req.params.jobid);

  try {
    const deleteStatus = await jobService.deleteJob(jobId);
    if (deleteStatus == null) {
      res.status(404).json({ error: 'Job not found.' });
    } else {
      res.json({ message: 'Job deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
