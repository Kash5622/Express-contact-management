const express= require("express");
const env=require("dotenv").config();
const errorHandler=require("./middleware/errorHandler")
const connectDb =require("./config/dbConnect")

connectDb()
const app=express();

const port=process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contact", require("./routes/contactRoute"));
app.use(errorHandler)

app.listen(port, (req, res)=>{
   console.log(`port running on http://localhost:${port}`)
});

