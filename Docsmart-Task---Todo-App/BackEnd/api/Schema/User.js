import mongoose from 'mongoose'

const loginSchema =mongoose.Schema({
  name:{type:String},
  password:{type:String},
  mail:{type:String},
  confirmpassword:{type:String}
})
const UserSchema =mongoose.model("Login",loginSchema);

export default UserSchema;
