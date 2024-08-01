import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { connectDB} from "./db/connectDB.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

await connectDB();

app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});