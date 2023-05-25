 require("dotenv").config({path:"./.env"})
const mongoose = require("mongoose")
const  cors =  require("cors")
const bodyParser =  require("body-parser")
const express =  require("express")
const Image =  require("./model/Image")
const postRouter =  require("./routes/image")
const { postImage } = require("./controllers/Image")
const uploadImage = require("./uploadImage")
const app =  express()

// middlewares 

app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json({limit:"50mb"}))
app.use(bodyParser.json({limit:"30mb"}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true,parameterLimit:50000}))
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    next()
})
app.use("/",postRouter);

// app.post("/upload",async (req,res)=>{

//     // const {image}  = req.body
// console.log("body",
// )
//     try {
//       uploadImage(req.body?.image).then(data=>
//           {

//             Image.create({
//                 imageURL:data
//             }).then(data=>{
//                 res.json("ok")
//             }).catch(err=>console.log(err.message))
//           }

//       ).catch(err=>console.log(err))
//     } catch (error) {
//         // console.log(error)
//         res.json({type:error,msg:error.message,src:"upload"})
//     }



// })
const PORT =  process.env.PORT || 3000

// connect to DB
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
app.listen(3000,()=>{console.log(`Server is running on port ${PORT}`)})

}).catch(err=>{
    console.log(err.message)
})

process.on("unhandledRejection",(reason)=>{
    console.log(reason)
})

process.on("uncaughtException",(reason)=>{
    console.log(reason)
})