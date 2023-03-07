export default async function  handler(req,res){
    res.status(404).json({message: `path ${req.url} not found`});
}
