const mongoose=require('mongoose')

async function connectionToMongoDB(url){
    return mongoose.connect(url)
    .then(()=>{console.log("MongoDB connected")})
    .catch((err)=>console.log("Error is",err));
}

module.exports={
    connectionToMongoDB,
}