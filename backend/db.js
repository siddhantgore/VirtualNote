const mongoose=require("mongoose");
// const mongoURI="mongodb://localhost:27017/virtualnote?readPreference=primary&appname=MongoDB%20Compass&ssl=false"


const mongoURI="mongodb+srv://mongo:mongo@cluster0.ow9ic.mongodb.net/virtualnote?retryWrites=true&w=majority"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully");
    })
}

// const connectToMongo=()=>{
//     mongoose.connect(mongoURI,{
//         useNewUrlParser:true,
//         useCreateIndex:true,
//         useUnifiedTopology:true,
//         useFindandModify:false
//     }).then(()=>{
//         console.log("Connected to Mongo Successfully");
//     }).catch((err)=>console.log("Error No Connection"))
// }

module.exports=connectToMongo;