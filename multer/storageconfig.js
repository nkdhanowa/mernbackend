const multer = require('multer');

const storage = multer.diskStorage({

     destination:(req,file,cb)=>{

        cb(null,'./uploads')

     },
     filename:(req,file,cb)=>{

      const filename = `image${Date.now()}.${file.originalname}`
      cb(null,filename);
     }

});

function fileFilter (req, file, cb) {

  
   if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg")
   {
      cb(null, true)

   }else
   {
      cb(null, false)
      cb(new Error(`I don\'t have a clue!`))
   }
   
 }

 const upload = multer({
   storage:storage,
   fileFilter:fileFilter
 })


 module.exports = upload;