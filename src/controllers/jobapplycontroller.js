import * as applicationService from "../services/jobapplyservice.js";

export const upload = async(req, res) => {
  const pdfFile = req.file.buffer;

  try {
    const resumeLink = await applicationService.uploadResume(pdfFile);
    res.status(201).json({ 
      message: "Application added successfully", 
      resumelink: resumeLink 
    });
  } catch (error) {
    if (error.message === 'Failed to create application.') {
      res.status(500).json({ message: 'EmailId already exists' });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export const apply = async (req, res) => {
  const applicationData = req.body;

  try {
    await applicationService.createApplication(applicationData);
    res.status(201).json({ message: "Application added successfully" });
  } catch (error) {
    if (error.message === 'Failed to create application.') {
      res.status(500).json({ message: 'EmailId already exists' });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

export const read = async (req, res) => {
  try {
    const applications = await applicationService.getAllApplications();
    res.status(200).json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
