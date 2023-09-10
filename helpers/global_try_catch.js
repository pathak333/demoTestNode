module.exports.tryCatch = (func) => async (req,res,next)=> {
    try {
        await func(req, res, next);
    } catch (error) {
        res.error(422, error.message, {});
    }
}