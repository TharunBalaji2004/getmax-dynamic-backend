import express from "express";
import cors from "cors";
import jobListRouter from "./routes/joblist.js";
import jobApplyRouter from "./routes/jobapply.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {    
    res.send("GetMax Management System - Backend")
});

app.use("/jobapply", jobApplyRouter);
app.use("/joblisting" , jobListRouter);

app.listen(PORT, () => {
    console.log('====================================');
    console.log("Server is running on port: " + PORT);
    console.log('====================================');
})