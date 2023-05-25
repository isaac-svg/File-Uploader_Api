const Image = require("../model/Image")
const uploadImage = require("../uploadImage")

const postImage =  (req,res)=>{

 
         uploadImage(req.body.image).then(data=>{
            Image.deleteMany({}).then(()=>{
                Image.create({
                    imageURL:data
                }).then(()=>{
                    res.json({url:data})
                }).catch(e=>console.log(e))
            }).catch(e=>console.log(e))
            
        }).catch(e=>console.log(e));
}




const getImage =  async (req,res)=>{
    try {
        const data = await Image.find({})
        console.log({...data})
    res.json({...data})
    } catch (error) {
        console.log(error)
    }
}
module.exports ={postImage,getImage}