import db from "../utils/firebaseConfig.js";
import { collection, doc, setDoc ,getDocs } from "firebase/firestore"; 

const Applications = collection(db, "Applications");

export const create=async(req,res)=>{
    const data=req.body;
    await setDoc(doc(Applications,data.emailid),data);
    res.send({"message":"Application added successfully"});

}

export const read=async(req,res)=>{
    const data = await getDocs(collection(db, "Applications"));
    let all={};
    data.forEach((doc) => {
       all[doc.id]=doc.data();
   });
   res.send(all);

}