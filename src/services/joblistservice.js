import prisma from "../utils/prisma.js";

export const createJob = async (jobData) => {
  try {
    const createdJob = await prisma.jobs.create({
      data: jobData,
    });
    return createdJob;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create job.');
  }
};

export const getAllJobs = async () => {
  try {
    const allJobs = await prisma.jobs.findMany();
    return allJobs;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch jobs.');
  }
};

export const getJobById = async (jobId) => {
  try {
    const job = await prisma.jobs.findUnique({
      where: { jobid: jobId },
    });

    return job;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch job.');
  }
};

export const updateJob = async (jobId, jobData) => {
  try {
    const job = await prisma.jobs.findUnique({
      where: { jobid: jobId },
    });
    
    if (job == null) return job;

    const updatedJob = await prisma.jobs.update({
      where: { jobid: jobId },
      data: jobData,
    });

    return updatedJob;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update job.');
  }
};

export const deleteJob = async (jobId) => {
  try {
    const job = await prisma.jobs.findUnique({
      where: { jobid: jobId },
    });
    
    if (job == null) return job;

    await prisma.jobs.delete({
      where: { jobid: jobId },
    });

    return true;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete job.');
  }
};
