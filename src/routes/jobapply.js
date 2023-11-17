import express from "express";
import { create } from "../controllers/jobapply.js";
import { read } from "../controllers/jobapply.js";

const router =express.Router();

router.post("/",create);
router.get("/",read);

export default router;