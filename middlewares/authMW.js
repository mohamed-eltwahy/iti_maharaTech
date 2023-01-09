const jwt=require("jsonwebtoken");
const config=require('config');

module.exports=(req,res,next)=>{

  const token=  req.header("x-auth-token");

  if(!token) return res.status(401).send('access denied...');
try{
 const decodedPayload= jwt.verify(token,config.get("jwtsec"));
 if(!decodedPayload.adminRole) return res.status(401).send("access denied...");
 next();

}catch(e){
    res.status(400).send(' inavalid Token');
}
    //chech user


}