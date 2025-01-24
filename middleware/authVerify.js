const jwt=require('jsonwebtoken');
const config=require('config')

//Creating a middleware to verify the Token
const authVerify=(req,res,next)=>{
    const token=req.headers.authorization;
    try {
      const decodedToken=jwt.verify(token,config.get("jwt_secret"));
      req.user={userId:decodedToken.Id}
      return next()
    } catch (err) {
      console.error(`error from `)
    }
  }

  module.exports=authVerify;