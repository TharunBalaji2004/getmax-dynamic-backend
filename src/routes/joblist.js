import express from "express";
import { create } from "../controllers/joblistcontroller.js";
import { read } from "../controllers/joblistcontroller.js";
import { readone } from "../controllers/joblistcontroller.js";
import { update } from "../controllers/joblistcontroller.js";
import { deletejob } from "../controllers/joblistcontroller.js";

const jobListRouter = express.Router();

jobListRouter.post("/create" , create);
jobListRouter.get("/read" , read);
jobListRouter.get("/readone/:jobid" , readone);
jobListRouter.patch("/update/:jobid" , update);
jobListRouter.delete("/delete/:jobid" , deletejob);

export default jobListRouter;