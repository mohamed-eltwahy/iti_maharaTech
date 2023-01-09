module.exports=  (routerhandler) => {
    return async function(req,res,next){
    try{
       await routerhandler(req,res);
    }catch(err){
        next(err);

    }}
}