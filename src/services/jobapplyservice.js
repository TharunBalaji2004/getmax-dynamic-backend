import prisma from "../utils/prisma.js";
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from "firebase/app";
import * as fbaseconfig from "../utils/firebase.js";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

// Initialize firebase application
initializeApp(fbaseconfig.config)

// Initialize firebase cloud storage and get reference
const storage = getStorage();

export const uploadResume = async (pdfFile) => {
  try {
    // Upload PDF file to Firebase Storage
    const uniqueFilename = uuidv4();
    const storageRef = ref(storage, `applications/${uniqueFilename}`);
    const metadata = { contentType: "application/pdf" };

    const snapshot = await uploadBytesResumable(storageRef, pdfFile, metadata);

    const downloadUrl = await getDownloadURL(snapshot.ref);

    return downloadUrl;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create application.');
  }
}

export const createApplication = async (applicationData) => {
  try {
    await prisma.application.create({
      data: applicationData
    });

  } catch (error) {
    console.error(error);
    throw new Error('Failed to create application.');
  }
};

export const getAllApplications = async () => {
  try {
    const applications = await prisma.application.findMany();
    return applications;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch applications.');
  }
};
