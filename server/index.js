import express from "express";
import connectToMongo from "./config/db.js";
import userRoutes from "./routes/user.js";
const app = express();  
const PORT = process.env.PORT || 3000;
connectToMongo();

//apply middleware
app.use(express.json());

import cors from 'cors';

app.use(cors()); // Allow all origins


app.get("/",(req,res) => {
    res.send("api is running");
});

// routes
app.use("/api/v1", userRoutes)

app.listen(PORT, ()=>{
    console.log(`Api is running on http://localhost:${PORT}`);
});