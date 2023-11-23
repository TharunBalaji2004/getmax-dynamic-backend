import express from "express";
import multer from "multer";
import { apply, read, upload } from "../controllers/jobapplycontroller.js";

const uploadMulter = multer();
const jobApplyRouter = express.Router();

jobApplyRouter.post("/upload", uploadMulter.single("resume"), upload);
jobApplyRouter.post("/apply", apply);
jobApplyRouter.get("/", read);

export default jobApplyRouter;