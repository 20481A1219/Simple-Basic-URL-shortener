const express=require("express")
const {connectionToMongoDB}=require('./connection')
const userRoute=require("./routes/url")
const URL=require("./models/url")
const app=express()
const PORT=8001;

connectionToMongoDB("mongodb://127.0.0.1:27017/short-url");

app.use(express.json())

app.get("/:shortId",async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId},{$push:{visitHistory:{time:Date.now()}}})
    console.log(shortId)
    res.redirect(entry.redirectURL)
})

app.use("/url",userRoute);

app.listen(PORT,()=>{console.log("Server is running on port 8001")})