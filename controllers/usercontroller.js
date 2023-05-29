const user = require('../models/userSchema.js');


const userpost = async (req,res)=>
{
   
  const { fname,lname,email,phone,gender,location,status } = req.body;
         
       const image = req.file.filename;
   
     if(!fname || !lname || !email || !phone || !gender || !location || !status)
        {
          return  res.status(404).json({message:'All field required'})
        }  
        
       try {
           
           const userfind = await user.findOne({email:email});
           
           if(userfind){
            return  res.status(404).json({message:'This User All ready exist'})
           }else
           {
          
             const usersave = new user({fname,lname,email,phone,gender,location,status,image});

                await usersave.save();
                return   res.status(200).json({message:'User save'})
                
           }
                    
       } catch (error) {
        return  res.status(404).json({error})
       }
       
        
        
      
}

const allusers = async (req,res)=>{
  
   const search = req.query.search || '';
   const gender= req.query.gender

  const query = {
    fname : {$regex:search,$options:'i'}
  }

  if(gender !=='All')
  {
    query.gender = gender
  }

  console.log(query)
  try {
    const userdata = await user.find(query);
    return res.status(200).json(userdata)  

  } catch (error) {
    return res.status(404).json(error)  
  }


}

const getsingleuser = async (req,res)=>{
   const {id} = req.params;
  
   try {
     
    const singleuser = await user.findOne({_id:id})
    return res.status(200).json(singleuser);

   } catch (error) {
    return res.status(404).json(error)  
   }
}


const userdelfun = async (req,res)=>{

   const {id} = req.params;

  try {
    
    const deleteuser = await user.findByIdAndDelete({_id:id})
    res.status(200).json(deleteuser)
  } catch (error) {
    res.status(404).json(error)
  }


}

module.exports = {userpost,allusers,getsingleuser,userdelfun}