import loginSchema from './../Schema/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
 
export const register =async(req,res)=>{
  
  const {name,mail,password,confirmpassword}=req.body

  const findUser = await loginSchema.findOne({mail})

  if(!name || !mail || !password || !confirmpassword)
  return res.json("please fill the form")

  else if (password.length<5)
  return res.json("password should contain atleast 6 characters")

  else if (password !==confirmpassword)
  return res.json("password is not matching")

  else if(findUser)
  return res.json("This mail already existing")

  else{
    const salt=await bcrypt.genSalt(9)
    const hash = await bcrypt.hash(password,salt)
    const details = await loginSchema.create(
      {
        name,mail,password:hash
      }
    )
    res.json(details)
  }
}

export const signup = async(req,res)=>{

  try {
    const {mail,password}=req.body
 
    const signUser = await loginSchema.findOne({mail})

    if(signUser && bcrypt.compareSync(password,signUser.password))
      return res.json({message:'Login completed successfully',Token:gentoken(signUser._id)})
    
      
      else{

        return res.json("mail id and password not matching")
      }

  } catch (error) {
    return res.json("Token not genrated")
  }

}
const gentoken=(id)=>{
  return jwt.sign({id},process.env.jwt_secret,{expiresIn:'1d'})


}