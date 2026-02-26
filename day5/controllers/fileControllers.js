const fileModel = require("../models/file");
const cloudinary = require("cloudinary").v2;
exports.localFileUpload = async (req, res) => {
    try {
        // const {name,tages,email} = req.body;
        const file = req.files.file;
        console.log("file->",file);
        let path = __dirname + "/files/" + Date.now() + '.'+`${file.name.split('.')[1]}`;
        console.log("path->",path);
        
        
        file.mv(path, (err) => {
            console.log("err->",err);
        });
        res.json({
            sucess: true,
            message: "file uploaded successfully",
        })

    } catch (error) {
        console.log(error);
        res.json({
            message: "file upload failed",
            sucess: false,
            error: error.message
        })
    }
}


function fileValidator(type, supportFile){
    return supportFile.includes(type);
}

async function uploadFileToCloudinary(file,folder){
    const options = {folder};
    return await cloudinary.uploader.upload(file.tempFilePath, options)
}

// images upload
exports.imageUpload = async(req, res)=>{
    try{
        const file = req.files.imageFiles;
        console.log("file->",file);

        const {name,tages,email} = req.body;
        console.log(name,email,tages);

        const supportFile =["jpg", "png", "jpeg", "gif", "svg"];
        const fileExtension = file.name.split(".")[1].toLowerCase();

        if(!fileValidator(fileExtension, supportFile)){
            return res.status(400).json({
                message: "file format not support",
                sucess: false,
                
            })
        }

        
        console.log("hello im debugger");
        const response = await uploadFileToCloudinary(file, "cloudinaryFolder");
        console.log("response->",response);

        //db entery
        const fileData =await fileModel.create({
            name,
            tages,
            email,
            imageUrl: response.secure_url,
        })

        

        res.json({
            sucess: true,
             imageUrl: response.secure_url,
            message: "file uploaded successfully",
        })

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "file upload failed",
            sucess: false,
            error: error.message
        })
    }
}